import dayjs from "dayjs";

import { CarsRepositoryInMemory } from "@/modules/cars/repositories";
import { BadRequestError } from "@/shared/helpers";
import { DayJsAdapter } from "@/shared/infra/date/implementations";

import { RentalsRepositoryInMemory } from "../../repositories/in-memory";
import { makeRental } from "../../test/mocks/rental";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayJsAdapter: DayJsAdapter;

describe("Create Rental", () => {
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        dayJsAdapter = new DayJsAdapter();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepositoryInMemory,
            dayJsAdapter,
            carsRepositoryInMemory
        );
    });

    it("should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute(makeRental());

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    });

    it("should not be able to create a new rental if there is another open to the same user", async () => {
        await createRentalUseCase.execute(makeRental());
        const promise = createRentalUseCase.execute(makeRental());

        await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    });

    it("should not be able to create a new rental if there is another open to the same car", async () => {
        await createRentalUseCase.execute(makeRental({ user_id: "234" }));
        const promise = createRentalUseCase.execute(
            makeRental({ user_id: "567" })
        );

        await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    });

    it("should not be able to create a new rental if invalid return time", async () => {
        const promise = createRentalUseCase.execute(
            makeRental({ expected_return_date: dayjs().toDate() })
        );

        await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    });
});

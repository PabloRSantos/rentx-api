import { ICreateCarDTO } from "@/modules/cars/dtos";
import { CarsRepositoryInMemory } from "@/modules/cars/repositories";
import { BadRequestError } from "@/shared/helpers";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

const makeCar = (): ICreateCarDTO => ({
    name: "Name Car",
    description: "Description Car",
    daily_rate: 100,
    license_plate: "ABC-1234",
    fine_amount: 60,
    brand: "Brand",
    category_id: "Category",
});

describe("Create Car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute(makeCar());
        expect(car).toHaveProperty("id");
    });

    it("should not be able to create a car with exists license plate", async () => {
        await createCarUseCase.execute(makeCar());
        const promise = createCarUseCase.execute(makeCar());
        await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    });

    it("should be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute(makeCar());
        expect(car.available).toBeTruthy();
    });
});

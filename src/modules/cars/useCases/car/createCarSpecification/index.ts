import {
    CarsRepository,
    SpecificationRepository,
} from "@/modules/cars/infra/typeorm/repositories";
import { IController } from "@/shared/protocols";

import { CreateCarSpecificationController } from "./CreateCarSpecificationController";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

export const makeCreateCarSpecificationController = (): IController => {
    const carRepository = new CarsRepository();
    const specificationRepository = new SpecificationRepository();
    const createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
        carRepository,
        specificationRepository
    );
    const createCarSpecificationController =
        new CreateCarSpecificationController(createCarSpecificationUseCase);

    return createCarSpecificationController;
};

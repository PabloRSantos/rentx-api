import { CarsRepository } from "@/modules/cars/infra/typeorm/repositories";
import { IController } from "@/shared/protocols";

import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

export const makeCreateCarController = (): IController => {
    const createCarRepository = new CarsRepository();
    const createCarUseCase = new CreateCarUseCase(createCarRepository);
    const createCarController = new CreateCarController(createCarUseCase);

    return createCarController;
};

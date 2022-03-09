import { CarsRepository } from "@/modules/cars/infra/typeorm/repositories";
import { IController } from "@/shared/protocols";

import { ListAvailableCarsController } from "./ListAvailableCarsController";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

export const makeListAvailableCarsController = (): IController => {
    const listAvailableCarsRepository = new CarsRepository();
    const listAvailableCarsUseCase = new ListAvailableCarsUseCase(
        listAvailableCarsRepository
    );
    const listAvailableCarsController = new ListAvailableCarsController(
        listAvailableCarsUseCase
    );

    return listAvailableCarsController;
};

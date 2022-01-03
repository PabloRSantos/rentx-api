import { CategoriesRepository } from "@/modules/cars/infra/typeorm/repositories";
import { IController } from "@/shared/protocols";

import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export const makeListCategoriesController = (): IController => {
    const listCategoriesRepository = new CategoriesRepository();
    const listCategoriesUseCase = new ListCategoriesUseCase(
        listCategoriesRepository
    );
    const listCategoriesController = new ListCategoriesController(
        listCategoriesUseCase
    );

    return listCategoriesController;
};

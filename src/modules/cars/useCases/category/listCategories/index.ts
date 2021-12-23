import { CategoriesRepository } from "@/modules/cars/repositories";

import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export const makeListCategoriesController = (): ListCategoriesController => {
    const listCategoriesRepository = new CategoriesRepository();
    const listCategoriesUseCase = new ListCategoriesUseCase(
        listCategoriesRepository
    );
    const listCategoriesController = new ListCategoriesController(
        listCategoriesUseCase
    );

    return listCategoriesController;
};

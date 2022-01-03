import { CategoriesRepository } from "@/modules/cars/infra/typeorm/repositories";
import { IController } from "@/shared/protocols";

import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export const makeCategoryController = (): IController => {
    const createCategoryRepository = new CategoriesRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(
        createCategoryRepository
    );
    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );

    return createCategoryController;
};

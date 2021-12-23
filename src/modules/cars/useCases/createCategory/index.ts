import { CategoriesRepository } from "../../repositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export const makeCategoryController = (): CreateCategoryController => {
    const createCategoryRepository = new CategoriesRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(
        createCategoryRepository
    );
    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );

    return createCategoryController;
};

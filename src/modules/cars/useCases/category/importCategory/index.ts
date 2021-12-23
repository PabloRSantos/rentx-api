import { CategoriesRepository } from "../../../repositories";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export const makeImportCategoryController = (): ImportCategoryController => {
    const importCategoriesRepository = new CategoriesRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(
        importCategoriesRepository
    );
    const importCategoryController = new ImportCategoryController(
        importCategoryUseCase
    );

    return importCategoryController;
};

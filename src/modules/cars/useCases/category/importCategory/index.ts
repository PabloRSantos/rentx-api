import { CategoriesRepository } from "@/modules/cars/infra/typeorm/repositories";
import { IController } from "@/shared/protocols";

import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export const makeImportCategoryController = (): IController => {
    const importCategoriesRepository = new CategoriesRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(
        importCategoriesRepository
    );
    const importCategoryController = new ImportCategoryController(
        importCategoryUseCase
    );

    return importCategoryController;
};

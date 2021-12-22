import { Router } from "express";

import { adaptRoute } from "../adapters";
import { CategoriesRepository } from "../modules/cars/repositories";
import { createCategoryController } from "../modules/cars/useCases";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoryRoutes.post("/", adaptRoute(createCategoryController));

categoryRoutes.get("/", (_, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(201).json(allCategories);
});

export { categoryRoutes };

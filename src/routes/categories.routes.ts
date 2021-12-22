import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories";
import { CreateCategoryService } from "../modules/cars/services";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );
    createCategoryService.execute({ name, description });
    return response.status(201).send();
});

categoryRoutes.get("/", (_, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(201).json(allCategories);
});

export { categoryRoutes };

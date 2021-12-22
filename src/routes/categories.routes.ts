import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
    try {
        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService(
            categoriesRepository
        );
        createCategoryService.execute({ name, description });
        return response.status(201).send();
    } catch (error) {
        return response.status(400).send();
    }
});

categoryRoutes.get("/", (_, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(201).json(allCategories);
});

export { categoryRoutes };

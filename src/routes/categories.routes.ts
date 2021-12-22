import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already exists!" });
    }

    categoriesRepository.create({ name, description });
    return response.status(201).send();
});

categoryRoutes.get("/", (_, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(201).json(allCategories);
});

export { categoryRoutes };

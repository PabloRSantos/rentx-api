import { Router } from "express";

import { adaptRoute } from "../adapters";
import {
    createCategoryController,
    listCategoriesController,
} from "../modules/cars/useCases";

const categoryRoutes = Router();

categoryRoutes.post("/", adaptRoute(createCategoryController));
categoryRoutes.get("/", adaptRoute(listCategoriesController));

export { categoryRoutes };

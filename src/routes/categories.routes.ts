import { Router } from "express";
import multer from "multer";

import { adaptRoute } from "../adapters";
import {
    createCategoryController,
    importCategoryController,
    listCategoriesController,
} from "../modules/cars/useCases";

const categoryRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoryRoutes.post("/", adaptRoute(createCategoryController));
categoryRoutes.get("/", adaptRoute(listCategoriesController));
categoryRoutes.post(
    "/import",
    upload.single("file"),
    adaptRoute(importCategoryController)
);

export { categoryRoutes };

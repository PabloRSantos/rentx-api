import { Router } from "express";
import multer from "multer";

import { adaptRoute } from "../adapters";
import {
    makeCategoryController,
    makeImportCategoryController,
    makeListCategoriesController,
} from "../modules/cars/useCases";

const categoryRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoryRoutes.post("/", adaptRoute(makeCategoryController()));
categoryRoutes.get("/", adaptRoute(makeListCategoriesController()));
categoryRoutes.post(
    "/import",
    upload.single("file"),
    adaptRoute(makeImportCategoryController())
);

export { categoryRoutes };

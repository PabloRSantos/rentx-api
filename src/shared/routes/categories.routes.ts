import { Router } from "express";
import multer from "multer";

import {
    makeCategoryController,
    makeListCategoriesController,
    makeImportCategoryController,
} from "../../modules/cars/useCases";
import { adaptRoute } from "../adapters";

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

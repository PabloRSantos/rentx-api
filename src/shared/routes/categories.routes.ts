import { Router } from "express";
import multer from "multer";

import {
    makeCategoryController,
    makeListCategoriesController,
    makeImportCategoryController,
} from "../../modules/cars/useCases";
import { adaptMiddleware, adaptRoute } from "../adapters";
import { makeEnsureAuthenticatedMiddleware } from "../middlewares";

const categoryRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoryRoutes.post(
    "/",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeCategoryController())
);
categoryRoutes.get("/", adaptRoute(makeListCategoriesController()));
categoryRoutes.post(
    "/import",
    upload.single("file"),
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeImportCategoryController())
);

export { categoryRoutes };

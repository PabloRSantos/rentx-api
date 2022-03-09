import { Router } from "express";

import {
    makeCreateCarController,
    makeListAvailableCarsController,
} from "@/modules/cars/useCases/car";

import { adaptMiddleware, adaptRoute } from "../adapters";
import {
    makeEnsureAdminMiddleware,
    makeEnsureAuthenticatedMiddleware,
} from "../middlewares";

const carsRouter = Router();
carsRouter.post(
    "/",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptMiddleware(makeEnsureAdminMiddleware()),
    adaptRoute(makeCreateCarController())
);

carsRouter.get("/available", adaptRoute(makeListAvailableCarsController()));

export { carsRouter };

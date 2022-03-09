import { Router } from "express";

import {
    makeCreateCarController,
    makeCreateCarSpecificationController,
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

carsRouter.post(
    "/specifications/:id",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptMiddleware(makeEnsureAdminMiddleware()),
    adaptRoute(makeCreateCarSpecificationController())
);

carsRouter.get("/available", adaptRoute(makeListAvailableCarsController()));

export { carsRouter };

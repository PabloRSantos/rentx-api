import { Router } from "express";

import {
    makeCreateRentalController,
    makeDevolutionRentalController,
} from "@/modules/rentals/useCases";

import { adaptMiddleware, adaptRoute } from "../adapters";
import { makeEnsureAuthenticatedMiddleware } from "../middlewares";

const rentalsRouter = Router();

rentalsRouter.post(
    "/",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeCreateRentalController())
);

rentalsRouter.post(
    "/devolution/:id",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeDevolutionRentalController())
);

export { rentalsRouter };

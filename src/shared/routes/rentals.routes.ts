import { Router } from "express";

import { makeCreateRentalController } from "@/modules/rentals/useCases";

import { adaptMiddleware, adaptRoute } from "../adapters";
import { makeEnsureAuthenticatedMiddleware } from "../middlewares";

const rentalsRouter = Router();

rentalsRouter.post(
    "/",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeCreateRentalController())
);

export { rentalsRouter };

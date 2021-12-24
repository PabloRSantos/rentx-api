import { Router } from "express";

import { makeCreateSpecificationController } from "../../modules/cars/useCases";
import { adaptMiddleware, adaptRoute } from "../adapters";
import { makeEnsureAuthenticatedMiddleware } from "../middlewares";

const specificationsRouter = Router();

specificationsRouter.post(
    "/",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeCreateSpecificationController())
);

export { specificationsRouter };

import { Router } from "express";

import { makeCreateSpecificationController } from "../../modules/cars/useCases";
import { adaptRoute } from "../adapters";

const specificationsRouter = Router();

specificationsRouter.post("/", adaptRoute(makeCreateSpecificationController()));

export { specificationsRouter };

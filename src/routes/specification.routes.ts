import { Router } from "express";

import { adaptRoute } from "../adapters";
import { createSpecificationController } from "../modules/cars/useCases/createSpecfication";

const specificationsRouter = Router();

specificationsRouter.post("/", adaptRoute(createSpecificationController));

export { specificationsRouter };

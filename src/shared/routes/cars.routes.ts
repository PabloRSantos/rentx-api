import { Router } from "express";

import { makeCreateCarController } from "@/modules/cars/useCases/car";

import { adaptRoute } from "../adapters";

const carsRouter = Router();
carsRouter.post("/", adaptRoute(makeCreateCarController()));

export { carsRouter };

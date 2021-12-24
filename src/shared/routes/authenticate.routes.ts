import { Router } from "express";

import { makeAuthenticateUserController } from "@/modules/account/useCases/authenticateUser";

import { adaptRoute } from "../adapters";

const authenticateRouter = Router();

authenticateRouter.post(
    "/sessions",
    adaptRoute(makeAuthenticateUserController())
);

export { authenticateRouter };

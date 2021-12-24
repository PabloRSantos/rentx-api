import { Router } from "express";

import { makeCreateUserController } from "@/modules/account/useCases/createUser";

import { adaptRoute } from "../adapters";

const usersRouter = Router();

usersRouter.post("/", adaptRoute(makeCreateUserController()));

export { usersRouter };

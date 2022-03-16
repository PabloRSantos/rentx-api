import { Router } from "express";

import { UploadConfig } from "@/config";
import {
    makeCreateUserController,
    makeUpdateUserAvatarController,
} from "@/modules/account/useCases";

import { adaptMiddleware, adaptRoute } from "../adapters";
import { makeEnsureAuthenticatedMiddleware } from "../middlewares";

const usersRouter = Router();
const uploadAvatar = new UploadConfig("./tmp/avatar").upload();

usersRouter.post("/", adaptRoute(makeCreateUserController()));
usersRouter.patch(
    "/avatar",
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    uploadAvatar.single("avatar"),
    adaptRoute(makeUpdateUserAvatarController())
);

export { usersRouter };

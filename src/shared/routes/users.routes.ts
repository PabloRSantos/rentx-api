import { Router } from "express";

import { UploadConfig } from "@/config";
import { makeCreateUserController } from "@/modules/account/useCases/createUser";
import { makeUpdateUserAvatarController } from "@/modules/account/useCases/updateUserAvatar";

import { adaptMiddleware, adaptRoute } from "../adapters";
import { makeEnsureAuthenticatedMiddleware } from "../middlewares";

const usersRouter = Router();
const uploadAvatar = new UploadConfig("./tmp/avatar").upload();

usersRouter.post("/", adaptRoute(makeCreateUserController()));
usersRouter.patch(
    "/avatar",
    uploadAvatar.single("avatar"),
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRoute(makeUpdateUserAvatarController())
);

export { usersRouter };

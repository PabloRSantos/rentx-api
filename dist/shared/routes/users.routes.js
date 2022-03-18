"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRouter = void 0;

var _express = require("express");

var _config = require("@/config");

var _useCases = require("@/modules/account/useCases");

var _adapters = require("../adapters");

var _middlewares = require("../middlewares");

const usersRouter = (0, _express.Router)();
exports.usersRouter = usersRouter;

const uploadAvatar = _config.UploadConfig.upload();

usersRouter.post("/", (0, _adapters.adaptRoute)((0, _useCases.makeCreateUserController)()));
usersRouter.get("/profile", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeGetUserProfileController)()));
usersRouter.patch("/avatar", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), uploadAvatar.single("avatar"), (0, _adapters.adaptRoute)((0, _useCases.makeUpdateUserAvatarController)()));
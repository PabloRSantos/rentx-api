"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateRouter = void 0;

var _express = require("express");

var _useCases = require("../../modules/account/useCases");

var _adapters = require("../adapters");

const authenticateRouter = (0, _express.Router)();
exports.authenticateRouter = authenticateRouter;
authenticateRouter.post("/sessions", (0, _adapters.adaptRoute)((0, _useCases.makeAuthenticateUserController)()));
authenticateRouter.post("/refresh-token", (0, _adapters.adaptRoute)((0, _useCases.makeRefreshTokenController)()));
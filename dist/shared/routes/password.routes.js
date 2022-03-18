"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordRouter = void 0;

var _express = require("express");

var _useCases = require("../../modules/account/useCases");

var _adapters = require("../adapters");

const passwordRouter = (0, _express.Router)();
exports.passwordRouter = passwordRouter;
passwordRouter.post("/forgot", (0, _adapters.adaptRoute)((0, _useCases.makeSendForgotPasswordController)()));
passwordRouter.post("/reset", (0, _adapters.adaptRoute)((0, _useCases.makeResetPasswordController)()));
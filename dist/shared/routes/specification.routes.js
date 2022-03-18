"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specificationsRouter = void 0;

var _express = require("express");

var _useCases = require("../../modules/cars/useCases");

var _adapters = require("../adapters");

var _middlewares = require("../middlewares");

const specificationsRouter = (0, _express.Router)();
exports.specificationsRouter = specificationsRouter;
specificationsRouter.post("/", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAdminMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeCreateSpecificationController)()));
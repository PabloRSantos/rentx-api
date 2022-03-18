"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rentalsRouter = void 0;

var _express = require("express");

var _useCases = require("@/modules/rentals/useCases");

var _adapters = require("../adapters");

var _middlewares = require("../middlewares");

const rentalsRouter = (0, _express.Router)();
exports.rentalsRouter = rentalsRouter;
rentalsRouter.post("/", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeCreateRentalController)()));
rentalsRouter.post("/devolution/:id", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeDevolutionRentalController)()));
rentalsRouter.get("/user", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeListRentalsByUserController)()));
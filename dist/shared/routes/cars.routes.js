"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carsRouter = void 0;

var _express = require("express");

var _config = require("@/config");

var _car = require("@/modules/cars/useCases/car");

var _uploadCarImage = require("@/modules/cars/useCases/car/uploadCarImage");

var _adapters = require("../adapters");

var _middlewares = require("../middlewares");

const carsRouter = (0, _express.Router)();
exports.carsRouter = carsRouter;

const upload = _config.UploadConfig.upload();

carsRouter.post("/", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAdminMiddleware)()), (0, _adapters.adaptRoute)((0, _car.makeCreateCarController)()));
carsRouter.post("/specifications/:id", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAdminMiddleware)()), (0, _adapters.adaptRoute)((0, _car.makeCreateCarSpecificationController)()));
carsRouter.post("/images/:id", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAdminMiddleware)()), upload.array("images"), (0, _adapters.adaptRoute)((0, _uploadCarImage.makeUploadCarImageController)()));
carsRouter.get("/available", (0, _adapters.adaptRoute)((0, _car.makeListAvailableCarsController)()));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateCarSpecificationController = void 0;

var _factories = require("@/modules/cars/repositories/factories");

var _CreateCarSpecificationController = require("./CreateCarSpecificationController");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

const makeCreateCarSpecificationController = () => {
  const createCarSpecificationUseCase = new _CreateCarSpecificationUseCase.CreateCarSpecificationUseCase((0, _factories.makeCarRepository)(), (0, _factories.makeSpecificationsRepository)());
  const createCarSpecificationController = new _CreateCarSpecificationController.CreateCarSpecificationController(createCarSpecificationUseCase);
  return createCarSpecificationController;
};

exports.makeCreateCarSpecificationController = makeCreateCarSpecificationController;
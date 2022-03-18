"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateSpecificationController = void 0;

var _factories = require("@/modules/cars/repositories/factories");

var _CreateSpecificationController = require("./CreateSpecificationController");

var _CreateSpecificationUseCase = require("./CreateSpecificationUseCase");

const makeCreateSpecificationController = () => {
  const createSpecificationUseCase = new _CreateSpecificationUseCase.CreateSpecificationUseCase((0, _factories.makeSpecificationsRepository)());
  const createSpecificationController = new _CreateSpecificationController.CreateSpecificationController(createSpecificationUseCase);
  return createSpecificationController;
};

exports.makeCreateSpecificationController = makeCreateSpecificationController;
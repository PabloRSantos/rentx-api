"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateCarController = void 0;

var _factories = require("../../../repositories/factories");

var _CreateCarController = require("./CreateCarController");

var _CreateCarUseCase = require("./CreateCarUseCase");

const makeCreateCarController = () => {
  const createCarUseCase = new _CreateCarUseCase.CreateCarUseCase((0, _factories.makeCarRepository)());
  const createCarController = new _CreateCarController.CreateCarController(createCarUseCase);
  return createCarController;
};

exports.makeCreateCarController = makeCreateCarController;
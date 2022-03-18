"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDevolutionRentalController = void 0;

var _factories = require("../../../cars/repositories/factories");

var _factories2 = require("../../../../shared/infra/date/factories");

var _factories3 = require("../../repositories/factories");

var _DevolutionRentalController = require("./DevolutionRentalController");

var _DevolutionRentalUseCase = require("./DevolutionRentalUseCase");

const makeDevolutionRentalController = () => {
  const devolutionRentalUseCase = new _DevolutionRentalUseCase.DevolutionRentalUseCase((0, _factories.makeCarRepository)(), (0, _factories3.makeRentalsRepository)(), (0, _factories2.makeDayJsAdapter)());
  const devolutionRentalController = new _DevolutionRentalController.DevolutionRentalController(devolutionRentalUseCase);
  return devolutionRentalController;
};

exports.makeDevolutionRentalController = makeDevolutionRentalController;
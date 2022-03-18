"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateRentalController = void 0;

var _factories = require("../../../cars/repositories/factories");

var _factories2 = require("../../../../shared/infra/date/factories");

var _factories3 = require("../../repositories/factories");

var _CreateRentalController = require("./CreateRentalController");

var _CreateRentalUseCase = require("./CreateRentalUseCase");

const makeCreateRentalController = () => {
  const createRentalUseCase = new _CreateRentalUseCase.CreateRentalUseCase((0, _factories3.makeRentalsRepository)(), (0, _factories2.makeDayJsAdapter)(), (0, _factories.makeCarRepository)());
  const createRentalController = new _CreateRentalController.CreateRentalController(createRentalUseCase);
  return createRentalController;
};

exports.makeCreateRentalController = makeCreateRentalController;
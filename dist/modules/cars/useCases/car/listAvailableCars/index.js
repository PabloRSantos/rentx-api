"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeListAvailableCarsController = void 0;

var _factories = require("@/modules/cars/repositories/factories");

var _ListAvailableCarsController = require("./ListAvailableCarsController");

var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");

const makeListAvailableCarsController = () => {
  const listAvailableCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase((0, _factories.makeCarRepository)());
  const listAvailableCarsController = new _ListAvailableCarsController.ListAvailableCarsController(listAvailableCarsUseCase);
  return listAvailableCarsController;
};

exports.makeListAvailableCarsController = makeListAvailableCarsController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeListRentalsByUserController = void 0;

var _factories = require("../../repositories/factories");

var _ListRentalsByUserController = require("./ListRentalsByUserController");

var _ListRentalsByUserUseCase = require("./ListRentalsByUserUseCase");

const makeListRentalsByUserController = () => {
  const listRentalsByUserUseCase = new _ListRentalsByUserUseCase.ListRentalsByUserUseCase((0, _factories.makeRentalsRepository)());
  const listRentalsByUserController = new _ListRentalsByUserController.ListRentalsByUserController(listRentalsByUserUseCase);
  return listRentalsByUserController;
};

exports.makeListRentalsByUserController = makeListRentalsByUserController;
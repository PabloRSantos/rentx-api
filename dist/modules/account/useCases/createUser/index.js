"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateUserController = void 0;

var _factories = require("../../infra/hasher/factories");

var _factories2 = require("../../repositories/factories");

var _CreateUserController = require("./CreateUserController");

var _CreateUserUseCase = require("./CreateUserUseCase");

const makeCreateUserController = () => {
  const createUserUseCase = new _CreateUserUseCase.CreateUserUseCase((0, _factories2.makeUsersRepository)(), (0, _factories.makeBcryptHasher)());
  const createUserController = new _CreateUserController.CreateUserController(createUserUseCase);
  return createUserController;
};

exports.makeCreateUserController = makeCreateUserController;
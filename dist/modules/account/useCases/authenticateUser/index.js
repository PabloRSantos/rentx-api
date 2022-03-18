"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAuthenticateUserController = void 0;

var _factories = require("@/shared/infra/date/factories");

var _factories2 = require("../../infra/encrypter/factories");

var _implementations = require("../../infra/hasher/implementations");

var _factories3 = require("../../repositories/factories");

var _AuthenticateUserController = require("./AuthenticateUserController");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

const makeAuthenticateUserController = () => {
  const hasherCompare = new _implementations.BcryptAdapter();
  const authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(hasherCompare, (0, _factories2.makeJwtEncrypter)(), (0, _factories3.makeUsersRepository)(), (0, _factories3.makeUsersTokensRepository)(), (0, _factories.makeDayJsAdapter)());
  const authenticateUserController = new _AuthenticateUserController.AuthenticateUserController(authenticateUserUseCase);
  return authenticateUserController;
};

exports.makeAuthenticateUserController = makeAuthenticateUserController;
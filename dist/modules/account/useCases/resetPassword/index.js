"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeResetPasswordController = void 0;

var _factories = require("../../../../shared/infra/date/factories");

var _factories2 = require("../../infra/hasher/factories");

var _factories3 = require("../../repositories/factories");

var _ResetPasswordController = require("./ResetPasswordController");

var _ResetPasswordUseCase = require("./ResetPasswordUseCase");

const makeResetPasswordController = () => {
  const resetPasswordUseCase = new _ResetPasswordUseCase.ResetPasswordUseCase((0, _factories3.makeUsersTokensRepository)(), (0, _factories3.makeUsersRepository)(), (0, _factories.makeDayJsAdapter)(), (0, _factories2.makeBcryptHasher)());
  const resetPasswordController = new _ResetPasswordController.ResetPasswordController(resetPasswordUseCase);
  return resetPasswordController;
};

exports.makeResetPasswordController = makeResetPasswordController;
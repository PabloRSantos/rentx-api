"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSendForgotPasswordController = void 0;

var _factories = require("../../../../shared/infra/date/factories");

var _factories2 = require("../../../../shared/infra/mail/factories");

var _factories3 = require("../../repositories/factories");

var _SendForgotPasswordMailController = require("./SendForgotPasswordMailController");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

const makeSendForgotPasswordController = () => {
  const sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase((0, _factories3.makeUsersRepository)(), (0, _factories3.makeUsersTokensRepository)(), (0, _factories.makeDayJsAdapter)(), (0, _factories2.makeEtheralAdapter)());
  const sendForgotPasswordMailController = new _SendForgotPasswordMailController.SendForgotPasswordMailController(sendForgotPasswordMailUseCase);
  return sendForgotPasswordMailController;
};

exports.makeSendForgotPasswordController = makeSendForgotPasswordController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendForgotPasswordMailController = void 0;

var _helpers = require("../../../../shared/helpers");

class SendForgotPasswordMailController {
  constructor(sendForgotPasswordMailUseCase) {
    this.sendForgotPasswordMailUseCase = sendForgotPasswordMailUseCase;
  }

  async handle(params) {
    const {
      email
    } = params.body;
    const response = await this.sendForgotPasswordMailUseCase.execute({
      email
    });
    return (0, _helpers.ok)(response);
  }

}

exports.SendForgotPasswordMailController = SendForgotPasswordMailController;
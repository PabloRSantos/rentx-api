"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordController = void 0;

var _helpers = require("@/shared/helpers");

class ResetPasswordController {
  constructor(resetPasswordUseCase) {
    this.resetPasswordUseCase = resetPasswordUseCase;
  }

  async handle(params) {
    const {
      token
    } = params.query;
    const {
      password
    } = params.body;
    await this.resetPasswordUseCase.execute({
      token,
      password
    });
    return (0, _helpers.noContent)();
  }

}

exports.ResetPasswordController = ResetPasswordController;
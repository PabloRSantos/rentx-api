"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserController = void 0;

var _helpers = require("../../../../shared/helpers");

class AuthenticateUserController {
  constructor(authenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }

  async handle(params) {
    const {
      email,
      password
    } = params.body;
    const response = await this.authenticateUserUseCase.execute({
      email,
      password
    });
    return (0, _helpers.ok)(response);
  }

}

exports.AuthenticateUserController = AuthenticateUserController;
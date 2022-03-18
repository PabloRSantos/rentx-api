"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _helpers = require("../../../../shared/helpers");

class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle({
    body
  }) {
    const {
      name,
      email,
      password,
      driver_license
    } = body;
    const user = await this.createUserUseCase.execute({
      name,
      email,
      password,
      driver_license
    });
    return (0, _helpers.ok)(user);
  }

}

exports.CreateUserController = CreateUserController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenController = void 0;

var _helpers = require("@/shared/helpers");

class RefreshTokenController {
  constructor(refreshTokenUseCase) {
    this.refreshTokenUseCase = refreshTokenUseCase;
  }

  async handle(params) {
    const {
      token
    } = params.body;
    const response = await this.refreshTokenUseCase.execute({
      token
    });
    return (0, _helpers.ok)(response);
  }

}

exports.RefreshTokenController = RefreshTokenController;
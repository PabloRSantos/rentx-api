"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecificationController = void 0;

var _http = require("@/shared/helpers/http");

class CreateSpecificationController {
  constructor(createSpecificationUseCase) {
    this.createSpecificationUseCase = createSpecificationUseCase;
  }

  async handle({
    body
  }) {
    const {
      name,
      description
    } = body;
    await this.createSpecificationUseCase.execute({
      name,
      description
    });
    return (0, _http.noContent)();
  }

}

exports.CreateSpecificationController = CreateSpecificationController;
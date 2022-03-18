"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCategoryController = void 0;

var _http = require("../../../../../shared/helpers/http");

class CreateCategoryController {
  constructor(createCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  async handle({
    body
  }) {
    const {
      name,
      description
    } = body;
    await this.createCategoryUseCase.execute({
      name,
      description
    });
    return (0, _http.noContent)();
  }

}

exports.CreateCategoryController = CreateCategoryController;
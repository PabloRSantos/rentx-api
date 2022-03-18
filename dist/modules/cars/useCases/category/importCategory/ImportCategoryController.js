"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCategoryController = void 0;

var _http = require("../../../../../shared/helpers/http");

class ImportCategoryController {
  constructor(importCategoryUseCase) {
    this.importCategoryUseCase = importCategoryUseCase;
  }

  async handle({
    file
  }) {
    await this.importCategoryUseCase.execute({
      file
    });
    return (0, _http.noContent)();
  }

}

exports.ImportCategoryController = ImportCategoryController;
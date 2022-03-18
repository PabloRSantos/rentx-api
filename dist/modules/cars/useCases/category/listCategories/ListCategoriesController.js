"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoriesController = void 0;

var _helpers = require("../../../../../shared/helpers");

class ListCategoriesController {
  constructor(listCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase;
  }

  async handle() {
    const categories = await this.listCategoriesUseCase.execute();
    return (0, _helpers.ok)(categories);
  }

}

exports.ListCategoriesController = ListCategoriesController;
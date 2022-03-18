"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoriesUseCase = void 0;

class ListCategoriesUseCase {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute() {
    return this.categoriesRepository.list();
  }

}

exports.ListCategoriesUseCase = ListCategoriesUseCase;
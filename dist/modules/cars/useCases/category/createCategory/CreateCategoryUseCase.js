"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCategoryUseCase = void 0;

var _helpers = require("../../../../../shared/helpers");

class CreateCategoryUseCase {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute({
    description,
    name
  }) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new _helpers.BadRequestError("Category Already exists!");
    }

    this.categoriesRepository.create({
      name,
      description
    });
  }

}

exports.CreateCategoryUseCase = CreateCategoryUseCase;
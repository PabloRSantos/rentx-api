"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecificationUseCase = void 0;

var _helpers = require("../../../../../shared/helpers");

class CreateSpecificationUseCase {
  constructor(specificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  async execute({
    name,
    description
  }) {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new _helpers.BadRequestError(`Specification ${name} already exists`);
    }

    await this.specificationRepository.create({
      name,
      description
    });
  }

}

exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
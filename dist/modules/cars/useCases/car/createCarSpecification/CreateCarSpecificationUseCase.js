"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarSpecificationUseCase = void 0;

var _helpers = require("../../../../../shared/helpers");

class CreateCarSpecificationUseCase {
  constructor(carsRepository, specificationsRepository) {
    this.carsRepository = carsRepository;
    this.specificationsRepository = specificationsRepository;
  }

  async execute({
    car_id,
    specifications_id
  }) {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new _helpers.BadRequestError("Car does not exists!");
    }

    const specifications = await this.specificationsRepository.findByIds(specifications_id);
    carExists.specifications = specifications;
    return this.carsRepository.create(carExists);
  }

}

exports.CreateCarSpecificationUseCase = CreateCarSpecificationUseCase;
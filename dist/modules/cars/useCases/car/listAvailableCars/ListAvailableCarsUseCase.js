"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAvailableCarsUseCase = void 0;

class ListAvailableCarsUseCase {
  constructor(carsRepository) {
    this.carsRepository = carsRepository;
  }

  async execute({
    category_id,
    brand,
    name
  }) {
    const cars = await this.carsRepository.findAvailable({
      category_id,
      brand,
      name
    });
    return cars;
  }

}

exports.ListAvailableCarsUseCase = ListAvailableCarsUseCase;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarUseCase = void 0;

var _helpers = require("../../../../../shared/helpers");

class CreateCarUseCase {
  constructor(carsRepository) {
    this.carsRepository = carsRepository;
  }

  async execute(data) {
    const carAlreadyExist = await this.carsRepository.findByLicensePlate(data.license_plate);

    if (carAlreadyExist) {
      throw new _helpers.BadRequestError("Car already exists!");
    }

    const newCar = await this.carsRepository.create(data);
    return newCar;
  }

}

exports.CreateCarUseCase = CreateCarUseCase;
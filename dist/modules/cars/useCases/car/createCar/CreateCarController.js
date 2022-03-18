"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarController = void 0;

var _helpers = require("@/shared/helpers");

class CreateCarController {
  constructor(createCarUseCase) {
    this.createCarUseCase = createCarUseCase;
  }

  async handle(params) {
    const {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    } = params.body;
    const car = await this.createCarUseCase.execute({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });
    return (0, _helpers.ok)(car);
  }

}

exports.CreateCarController = CreateCarController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRentalController = void 0;

var _helpers = require("@/shared/helpers");

class CreateRentalController {
  constructor(createRentalUseCase) {
    this.createRentalUseCase = createRentalUseCase;
  }

  async handle(params) {
    const {
      car_id,
      expected_return_date
    } = params.body;
    const rental = await this.createRentalUseCase.execute({
      car_id,
      expected_return_date,
      user_id: params.userId
    });
    return (0, _helpers.ok)(rental);
  }

}

exports.CreateRentalController = CreateRentalController;
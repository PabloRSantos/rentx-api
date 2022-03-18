"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevolutionRentalController = void 0;

var _helpers = require("@/shared/helpers");

class DevolutionRentalController {
  constructor(devolutionRentalUseCase) {
    this.devolutionRentalUseCase = devolutionRentalUseCase;
  }

  async handle(data) {
    const {
      id
    } = data.params;
    const rental = await this.devolutionRentalUseCase.execute({
      rental_id: id
    });
    return (0, _helpers.ok)(rental);
  }

}

exports.DevolutionRentalController = DevolutionRentalController;
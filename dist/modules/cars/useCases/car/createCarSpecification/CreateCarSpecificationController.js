"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarSpecificationController = void 0;

var _helpers = require("@/shared/helpers");

class CreateCarSpecificationController {
  constructor(createCarSpecificationUseCase) {
    this.createCarSpecificationUseCase = createCarSpecificationUseCase;
  }

  async handle(params) {
    const {
      specifications_id
    } = params.body;
    const {
      id
    } = params.params;
    const car = await this.createCarSpecificationUseCase.execute({
      car_id: id,
      specifications_id
    });
    return (0, _helpers.ok)(car);
  }

}

exports.CreateCarSpecificationController = CreateCarSpecificationController;
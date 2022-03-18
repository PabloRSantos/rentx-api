"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRentalsByUserController = void 0;

var _helpers = require("../../../../shared/helpers");

class ListRentalsByUserController {
  constructor(listRentalsByUserUseCase) {
    this.listRentalsByUserUseCase = listRentalsByUserUseCase;
  }

  async handle(data) {
    const rentalsByIser = await this.listRentalsByUserUseCase.execute({
      user_id: data.userId
    });
    return (0, _helpers.ok)(rentalsByIser);
  }

}

exports.ListRentalsByUserController = ListRentalsByUserController;
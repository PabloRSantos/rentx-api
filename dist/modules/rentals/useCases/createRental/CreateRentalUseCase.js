"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRentalUseCase = void 0;

var _helpers = require("@/shared/helpers");

class CreateRentalUseCase {
  constructor(rentalsRepository, dateAdapter, carsRepository) {
    this.rentalsRepository = rentalsRepository;
    this.dateAdapter = dateAdapter;
    this.carsRepository = carsRepository;
  }

  async execute({
    user_id,
    car_id,
    expected_return_date
  }) {
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

    if (carUnavailable) {
      throw new _helpers.BadRequestError("Car is unavailable");
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);

    if (rentalOpenToUser) {
      throw new _helpers.BadRequestError("There is a rental in progress for user!");
    }

    const dateNow = this.dateAdapter.dateNow();
    const compare = this.dateAdapter.compareInHours(dateNow, expected_return_date);
    const minimumHour = 24;

    if (compare < minimumHour) {
      throw new _helpers.BadRequestError("invalid return time!");
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date
    });
    await this.carsRepository.updateAvailable(car_id, false);
    return rental;
  }

}

exports.CreateRentalUseCase = CreateRentalUseCase;
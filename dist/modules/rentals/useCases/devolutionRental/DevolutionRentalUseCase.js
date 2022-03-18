"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevolutionRentalUseCase = void 0;

var _helpers = require("../../../../shared/helpers");

class DevolutionRentalUseCase {
  constructor(carsRepository, rentalsRepository, dateAdapter) {
    this.carsRepository = carsRepository;
    this.rentalsRepository = rentalsRepository;
    this.dateAdapter = dateAdapter;
  }

  async execute({
    rental_id
  }) {
    const rental = await this.rentalsRepository.findById(rental_id);
    const minumum_daily = 1;
    const dateNow = this.dateAdapter.dateNow();

    if (!rental) {
      throw new _helpers.BadRequestError("Rental does not exists");
    }

    const car = await this.carsRepository.findById(rental.car_id);

    if (!car) {
      throw new _helpers.BadRequestError("Car does not exists");
    }

    let daily = this.dateAdapter.compareInDays(rental.start_date, dateNow);

    if (daily <= 0) {
      daily = minumum_daily;
    }

    const delay = this.dateAdapter.compareInDays(rental.expected_return_date, dateNow);
    let total = 0;

    if (delay > 0) {
      const calculate_fine = delay * car.fine_amount;
      total = calculate_fine;
    }

    total += daily * car.daily_rate;
    rental.end_date = dateNow;
    rental.total = total;
    await this.rentalsRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);
    return rental;
  }

}

exports.DevolutionRentalUseCase = DevolutionRentalUseCase;
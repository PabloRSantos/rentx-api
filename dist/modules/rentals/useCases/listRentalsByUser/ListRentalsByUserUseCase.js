"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRentalsByUserUseCase = void 0;

class ListRentalsByUserUseCase {
  constructor(rentalsRepository) {
    this.rentalsRepository = rentalsRepository;
  }

  async execute({
    user_id
  }) {
    const rentalsByUser = await this.rentalsRepository.findByUser(user_id);
    return rentalsByUser;
  }

}

exports.ListRentalsByUserUseCase = ListRentalsByUserUseCase;
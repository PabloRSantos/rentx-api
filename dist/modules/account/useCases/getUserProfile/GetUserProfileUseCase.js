"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserProfileUseCase = void 0;

var _helpers = require("@/shared/helpers");

class GetUserProfileUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    userId
  }) {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new _helpers.NotFoundError("User not found!");
    }

    return user;
  }

}

exports.GetUserProfileUseCase = GetUserProfileUseCase;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordUseCase = void 0;

var _helpers = require("../../../../shared/helpers");

class ResetPasswordUseCase {
  constructor(usersTokensRepository, usersRepository, dateAdapter, hasher) {
    this.usersTokensRepository = usersTokensRepository;
    this.usersRepository = usersRepository;
    this.dateAdapter = dateAdapter;
    this.hasher = hasher;
  }

  async execute({
    token,
    password
  }) {
    const userToken = await this.usersTokensRepository.findByRefreshToken(token);

    if (!userToken) {
      throw new _helpers.NotFoundError("Token invalid!");
    }

    const verifyTokenExpires = this.dateAdapter.compareIfBefore(userToken.expires_date, this.dateAdapter.dateNow());

    if (verifyTokenExpires) {
      throw new _helpers.BadRequestError("Token expired!");
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new _helpers.NotFoundError("User not found!");
    }

    user.password = await this.hasher.hash(password, 8);
    await this.usersRepository.create(user);
    await this.usersTokensRepository.deleteById(userToken.id);
  }

}

exports.ResetPasswordUseCase = ResetPasswordUseCase;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserUseCase = void 0;

var _config = require("@/config");

var _helpers = require("@/shared/helpers");

class AuthenticateUserUseCase {
  constructor(hashCompare, encrypter, usersRepository, usersTokensRepository, dateAdapter) {
    this.hashCompare = hashCompare;
    this.encrypter = encrypter;
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dateAdapter = dateAdapter;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _helpers.BadRequestError("Email or password incorrect");
    }

    const passwordMatch = await this.hashCompare.compare(password, user.password);

    if (!passwordMatch) {
      throw new _helpers.BadRequestError("Email or password incorrect");
    }

    const token = this.encrypter.encrypt({}, {
      subject: user.id,
      expiresIn: _config.authConfig.expires_in_token
    });
    const refreshToken = this.encrypter.encrypt({
      email
    }, {
      subject: user.id,
      expiresIn: _config.authConfig.expires_in_refresh_token
    });
    const refreshTokenExpiresDate = this.dateAdapter.addDays(this.dateAdapter.dateNow(), _config.authConfig.expires_refresh_token_days);
    await this.usersTokensRepository.create({
      expires_date: refreshTokenExpiresDate,
      refresh_token: refreshToken,
      user_id: user.id
    });
    return {
      token,
      refresh_token: refreshToken,
      user: {
        name: user.name,
        email
      }
    };
  }

}

exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
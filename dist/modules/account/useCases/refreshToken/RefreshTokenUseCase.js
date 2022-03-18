"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenUseCase = void 0;

var _config = require("../../../../config");

var _helpers = require("../../../../shared/helpers");

class RefreshTokenUseCase {
  constructor(decrypter, usersTokensRepository, encrypter, dateAdapter) {
    this.decrypter = decrypter;
    this.usersTokensRepository = usersTokensRepository;
    this.encrypter = encrypter;
    this.dateAdapter = dateAdapter;
  }

  async execute({
    token
  }) {
    const decode = this.decrypter.decrypt(token);
    const userId = decode.sub;
    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(userId, token);

    if (!userToken) {
      throw new _helpers.NotFoundError("Refresh Token does not exists!");
    }

    await this.usersTokensRepository.deleteById(userToken.id);
    const refreshToken = this.encrypter.encrypt({
      email: decode.email
    }, {
      subject: userId,
      expiresIn: _config.authConfig.expires_in_refresh_token
    });
    const refreshTokenExpiresDate = this.dateAdapter.addDays(this.dateAdapter.dateNow(), _config.authConfig.expires_refresh_token_days);
    await this.usersTokensRepository.create({
      expires_date: refreshTokenExpiresDate,
      refresh_token: refreshToken,
      user_id: userId
    });
    const newToken = this.encrypter.encrypt({}, {
      subject: userId,
      expiresIn: _config.authConfig.expires_in_token
    });
    return {
      refresh_token: refreshToken,
      token: newToken
    };
  }

}

exports.RefreshTokenUseCase = RefreshTokenUseCase;
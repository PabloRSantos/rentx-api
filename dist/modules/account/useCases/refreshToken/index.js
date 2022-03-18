"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRefreshTokenController = void 0;

var _factories = require("@/shared/infra/date/factories");

var _factories2 = require("../../infra/encrypter/factories");

var _factories3 = require("../../repositories/factories");

var _RefreshTokenController = require("./RefreshTokenController");

var _RefreshTokenUseCase = require("./RefreshTokenUseCase");

const makeRefreshTokenController = () => {
  const refreshTokenUseCase = new _RefreshTokenUseCase.RefreshTokenUseCase((0, _factories2.makeJwtDecrypter)(), (0, _factories3.makeUsersTokensRepository)(), (0, _factories2.makeJwtEncrypter)(), (0, _factories.makeDayJsAdapter)());
  const refreshTokenController = new _RefreshTokenController.RefreshTokenController(refreshTokenUseCase);
  return refreshTokenController;
};

exports.makeRefreshTokenController = makeRefreshTokenController;
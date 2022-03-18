"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEnsureAuthenticatedMiddleware = void 0;

var _factories = require("@/modules/account/infra/encrypter/factories");

var _factories2 = require("@/modules/account/repositories/factories");

var _ensureAuthenticatedMiddleware = require("./ensureAuthenticatedMiddleware");

const makeEnsureAuthenticatedMiddleware = () => {
  const ensureAuthenticatedMiddleware = new _ensureAuthenticatedMiddleware.EnsureAuthenticated((0, _factories.makeJwtDecrypter)(), (0, _factories2.makeUsersRepository)());
  return ensureAuthenticatedMiddleware;
};

exports.makeEnsureAuthenticatedMiddleware = makeEnsureAuthenticatedMiddleware;
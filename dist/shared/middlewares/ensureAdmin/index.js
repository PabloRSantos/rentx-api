"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEnsureAdminMiddleware = void 0;

var _repositories = require("@/modules/account/infra/typeorm/repositories");

var _ensureAdminMiddleware = require("./ensureAdminMiddleware");

const makeEnsureAdminMiddleware = () => {
  const usersRepository = new _repositories.UsersRepository();
  const ensureAdminMiddleware = new _ensureAdminMiddleware.EnsureAdmin(usersRepository);
  return ensureAdminMiddleware;
};

exports.makeEnsureAdminMiddleware = makeEnsureAdminMiddleware;
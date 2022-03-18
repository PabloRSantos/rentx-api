"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUsersTokensRepository = void 0;

var _repositories = require("../../infra/typeorm/repositories");

const makeUsersTokensRepository = () => {
  return new _repositories.UsersTokensRepository();
};

exports.makeUsersTokensRepository = makeUsersTokensRepository;
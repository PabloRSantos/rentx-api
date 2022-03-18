"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUsersRepository = void 0;

var _repositories = require("../../infra/typeorm/repositories");

const makeUsersRepository = () => {
  return new _repositories.UsersRepository();
};

exports.makeUsersRepository = makeUsersRepository;
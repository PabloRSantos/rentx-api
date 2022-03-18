"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokensRepositoryInMemory = void 0;

var _entities = require("../../infra/typeorm/entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UsersTokensRepositoryInMemory {
  constructor() {
    _defineProperty(this, "usersTokens", []);
  }

  async create(data) {
    const userToken = new _entities.UserTokens();
    Object.assign(userToken, data);
    this.usersTokens.push(userToken);
    return userToken;
  }

  async deleteById(id) {
    this.usersTokens = this.usersTokens.filter(userToken => userToken.id !== id);
  }

  async findByUserIdAndRefreshToken(user_id, refresh_token) {
    return this.usersTokens.find(userToken => userToken.user_id === user_id && userToken.refresh_token === refresh_token);
  }

  async findByRefreshToken(refresh_token) {
    return this.usersTokens.find(userToken => userToken.refresh_token === refresh_token);
  }

}

exports.UsersTokensRepositoryInMemory = UsersTokensRepositoryInMemory;
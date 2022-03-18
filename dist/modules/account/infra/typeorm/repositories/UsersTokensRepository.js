"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokensRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UsersTokensRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.UserTokens);
  }

  findByRefreshToken(refresh_token) {
    return this.repository.findOne({
      refresh_token
    });
  }

  async deleteById(id) {
    await this.repository.delete({
      id
    });
  }

  findByUserIdAndRefreshToken(user_id, refresh_token) {
    return this.repository.findOne({
      user_id,
      refresh_token
    });
  }

  create(data) {
    const userToken = this.repository.create(data);
    return this.repository.save(userToken);
  }

}

exports.UsersTokensRepository = UsersTokensRepository;
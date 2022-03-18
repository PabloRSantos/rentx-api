"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UsersRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.User);
  }

  findById(id) {
    return this.repository.findOne({
      id
    });
  }

  findByEmail(email) {
    return this.repository.findOne({
      email
    });
  }

  async create(data) {
    const user = this.repository.create(data);
    return this.repository.save(user);
  }

}

exports.UsersRepository = UsersRepository;
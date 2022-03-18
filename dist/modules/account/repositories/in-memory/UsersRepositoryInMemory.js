"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepositoryInMemory = void 0;

var _entities = require("../../infra/typeorm/entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UsersRepositoryInMemory {
  constructor() {
    _defineProperty(this, "users", []);
  }

  async create(data) {
    const user = new _entities.User();
    Object.assign(user, data);
    this.users.push(user);
    return user;
  }

  async findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  async findById(id) {
    return this.users.find(user => user.id === id);
  }

}

exports.UsersRepositoryInMemory = UsersRepositoryInMemory;
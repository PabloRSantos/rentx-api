"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationsRepositoryInMemory = void 0;

var _entities = require("../../infra/typeorm/entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SpecificationsRepositoryInMemory {
  constructor() {
    _defineProperty(this, "specifications", []);
  }

  async create(data) {
    const specification = new _entities.Specification();
    Object.assign(specification, data);
    this.specifications.push(specification);
    return specification;
  }

  async findByName(name) {
    return this.specifications.find(specification => specification.name === name);
  }

  async findByIds(ids) {
    return this.specifications.filter(specification => ids.includes(specification.id));
  }

}

exports.SpecificationsRepositoryInMemory = SpecificationsRepositoryInMemory;
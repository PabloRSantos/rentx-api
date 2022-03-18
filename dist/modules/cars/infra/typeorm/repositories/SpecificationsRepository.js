"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SpecificationRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.Specification);
  }

  findByIds(ids) {
    return this.repository.findByIds(ids);
  }

  async create({
    description,
    name
  }) {
    const specification = this.repository.create({
      name,
      description
    });
    return this.repository.save(specification);
  }

  async findByName(name) {
    return this.repository.findOne({
      name
    });
  }

}

exports.SpecificationRepository = SpecificationRepository;
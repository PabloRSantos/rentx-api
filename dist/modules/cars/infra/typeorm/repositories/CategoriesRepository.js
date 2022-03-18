"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CategoriesRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.Category);
  }

  async create({
    name,
    description
  }) {
    const category = this.repository.create({
      name,
      description
    });
    return this.repository.save(category);
  }

  async list() {
    return this.repository.find();
  }

  async findByName(name) {
    return this.repository.findOne({
      name
    });
  }

}

exports.CategoriesRepository = CategoriesRepository;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesRepositoryInMemory = void 0;

var _entities = require("../../infra/typeorm/entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CategoriesRepositoryInMemory {
  constructor() {
    _defineProperty(this, "categories", []);
  }

  async findByName(name) {
    const category = this.categories.find(category => category.name === name);
    return category;
  }

  async list() {
    return this.categories;
  }

  async create({
    name,
    description
  }) {
    const newCategory = new _entities.Category();
    Object.assign(newCategory, {
      name,
      description
    });
    this.categories.push(newCategory);
    return newCategory;
  }

}

exports.CategoriesRepositoryInMemory = CategoriesRepositoryInMemory;
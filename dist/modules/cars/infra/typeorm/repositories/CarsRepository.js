"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarsRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CarsRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.Car);
  }

  async findById(id) {
    return this.repository.findOne({
      id
    });
  }

  async updateAvailable(id, available) {
    await this.repository.createQueryBuilder().update().set({
      available
    }).where("id = :id", {
      id
    }).execute();
  }

  async findAvailable({
    brand,
    category_id,
    name
  }) {
    const carsQuery = this.repository.createQueryBuilder("car").where("available = :available", {
      available: true
    });

    if (brand) {
      carsQuery.andWhere("car.brand = :brand", {
        brand
      });
    }

    if (category_id) {
      carsQuery.andWhere("car.category_id = :category_id", {
        category_id
      });
    }

    if (name) {
      carsQuery.andWhere("car.name = :name", {
        name
      });
    }

    return carsQuery.getMany();
  }

  create(data) {
    const car = this.repository.create(data);
    return this.repository.save(car);
  }

  findByLicensePlate(license_plate) {
    return this.repository.findOne({
      license_plate
    });
  }

}

exports.CarsRepository = CarsRepository;
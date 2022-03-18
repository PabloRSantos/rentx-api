"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarsRepositoryInMemory = void 0;

var _entities = require("../../infra/typeorm/entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CarsRepositoryInMemory {
  constructor() {
    _defineProperty(this, "cars", []);
  }

  async updateAvailable(id, available) {
    const carIndex = this.cars.findIndex(car => car.id === id);
    this.cars[carIndex].available = available;
  }

  async findById(id) {
    return this.cars.find(car => car.id === id);
  }

  async findAvailable(params) {
    return this.cars.filter(car => {
      const brandCondition = params.brand && car.brand === params.brand;
      const categoryCondition = params.category_id && car.category_id === params.category_id;
      const nameCondition = params.name && car.name === params.name;
      if (car.available || brandCondition && categoryCondition && nameCondition) return true;
      return false;
    });
  }

  async create(data) {
    const car = new _entities.Car();
    Object.assign(car, data);
    this.cars.push(car);
    return car;
  }

  async findByLicensePlate(license_plate) {
    return this.cars.find(car => car.license_plate === license_plate);
  }

}

exports.CarsRepositoryInMemory = CarsRepositoryInMemory;
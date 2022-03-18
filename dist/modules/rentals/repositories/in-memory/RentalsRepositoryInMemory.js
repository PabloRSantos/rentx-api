"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RentalsRepositoryInMemory = void 0;

var _entities = require("../../infra/typeorm/entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RentalsRepositoryInMemory {
  constructor() {
    _defineProperty(this, "rentals", []);
  }

  async findByUser(user_id) {
    return this.rentals.filter(rental => rental.user_id === user_id);
  }

  async findById(id) {
    return this.rentals.find(rental => rental.id === id);
  }

  async create(params) {
    const rental = new _entities.Rental();
    Object.assign(rental, params, {
      start_date: new Date()
    });
    this.rentals.push(rental);
    return rental;
  }

  async findOpenRentalByCar(car_id) {
    return this.rentals.find(rental => rental.car_id === car_id && !rental.end_date);
  }

  async findOpenRentalByUser(user_id) {
    return this.rentals.find(rental => rental.user_id === user_id && !rental.end_date);
  }

}

exports.RentalsRepositoryInMemory = RentalsRepositoryInMemory;
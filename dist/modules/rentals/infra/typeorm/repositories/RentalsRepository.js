"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RentalsRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RentalsRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.Rental);
  }

  findByUser(user_id) {
    return this.repository.find({
      where: {
        user_id
      },
      relations: ["car"]
    });
  }

  findById(id) {
    return this.repository.findOne({
      id
    });
  }

  findOpenRentalByCar(car_id) {
    return this.repository.findOne({
      car_id,
      end_date: null
    });
  }

  findOpenRentalByUser(user_id) {
    return this.repository.findOne({
      user_id,
      end_date: null
    });
  }

  create(params) {
    const rental = this.repository.create(params);
    return this.repository.save(rental);
  }

}

exports.RentalsRepository = RentalsRepository;
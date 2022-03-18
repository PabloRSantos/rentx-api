"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarImagesRepository = void 0;

var _typeorm = require("typeorm");

var _entities = require("../entities");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CarImagesRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getRepository)(_entities.CarImage);
  }

  async create(car_id, image_name) {
    const carImage = this.repository.create({
      car_id,
      image_name
    });
    return this.repository.save(carImage);
  }

}

exports.CarImagesRepository = CarImagesRepository;
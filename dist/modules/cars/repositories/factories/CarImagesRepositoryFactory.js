"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCarImagesRepository = void 0;

var _CarImagesRepository = require("../../infra/typeorm/repositories/CarImagesRepository");

const makeCarImagesRepository = () => {
  return new _CarImagesRepository.CarImagesRepository();
};

exports.makeCarImagesRepository = makeCarImagesRepository;
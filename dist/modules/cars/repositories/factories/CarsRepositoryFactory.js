"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCarRepository = void 0;

var _repositories = require("../../infra/typeorm/repositories");

const makeCarRepository = () => {
  return new _repositories.CarsRepository();
};

exports.makeCarRepository = makeCarRepository;
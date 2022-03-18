"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRentalsRepository = void 0;

var _repositories = require("../../infra/typeorm/repositories");

const makeRentalsRepository = () => {
  return new _repositories.RentalsRepository();
};

exports.makeRentalsRepository = makeRentalsRepository;
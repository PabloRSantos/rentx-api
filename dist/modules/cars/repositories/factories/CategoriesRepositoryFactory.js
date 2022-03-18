"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCategoriesRepository = void 0;

var _repositories = require("../../infra/typeorm/repositories");

const makeCategoriesRepository = () => {
  return new _repositories.CategoriesRepository();
};

exports.makeCategoriesRepository = makeCategoriesRepository;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeListCategoriesController = void 0;

var _factories = require("../../../repositories/factories");

var _ListCategoriesController = require("./ListCategoriesController");

var _ListCategoriesUseCase = require("./ListCategoriesUseCase");

const makeListCategoriesController = () => {
  const listCategoriesUseCase = new _ListCategoriesUseCase.ListCategoriesUseCase((0, _factories.makeCategoriesRepository)());
  const listCategoriesController = new _ListCategoriesController.ListCategoriesController(listCategoriesUseCase);
  return listCategoriesController;
};

exports.makeListCategoriesController = makeListCategoriesController;
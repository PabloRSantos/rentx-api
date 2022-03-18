"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCategoryController = void 0;

var _factories = require("../../../repositories/factories");

var _CreateCategoryController = require("./CreateCategoryController");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

const makeCategoryController = () => {
  const createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase((0, _factories.makeCategoriesRepository)());
  const createCategoryController = new _CreateCategoryController.CreateCategoryController(createCategoryUseCase);
  return createCategoryController;
};

exports.makeCategoryController = makeCategoryController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImportCategoryController = void 0;

var _factories = require("../../../repositories/factories");

var _ImportCategoryController = require("./ImportCategoryController");

var _ImportCategoryUseCase = require("./ImportCategoryUseCase");

const makeImportCategoryController = () => {
  const importCategoryUseCase = new _ImportCategoryUseCase.ImportCategoryUseCase((0, _factories.makeCategoriesRepository)());
  const importCategoryController = new _ImportCategoryController.ImportCategoryController(importCategoryUseCase);
  return importCategoryController;
};

exports.makeImportCategoryController = makeImportCategoryController;
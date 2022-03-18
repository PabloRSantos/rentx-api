"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemas = void 0;

var _accounts = require("./schemas/accounts");

var _cars = require("./schemas/cars");

const schemas = {
  createCategory: _cars.createCategorySchema,
  uploadCategory: _cars.uploadCategorySchema,
  category: _cars.categorySchema,
  createSpecification: _cars.createSpecificationSchema,
  createSession: _accounts.createSessionsSchema,
  createCar: _cars.createCarSchema
};
exports.schemas = schemas;
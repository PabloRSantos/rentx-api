"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = require("./components");

var _paths = require("./paths");

var _schemas = require("./schemas");

var _default = {
  openapi: "3.0.0",
  info: {
    title: "RentX Documentation",
    description: "This is an API Rent",
    version: "1.0.0",
    contact: {
      email: "pablorsantos15@gmail.com"
    }
  },
  tags: [{
    name: "Category"
  }, {
    name: "Specifications"
  }],
  paths: _paths.paths,
  schemas: _schemas.schemas,
  components: _components.components
};
exports.default = _default;
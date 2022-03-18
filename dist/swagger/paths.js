"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paths = void 0;

var _paths = require("./paths/");

var _cars = require("./paths/cars");

var _sessions = require("./paths/sessions");

const paths = {
  "/cars": _paths.carsPath,
  "/cars/images/{id}": _cars.carImagesPath,
  "/categories": _paths.categoriesPath,
  "/categories/import": _paths.categoriesPath.import,
  "/specifications": _paths.specificationsPath,
  "/sessions": _sessions.sessionsPath
};
exports.paths = paths;
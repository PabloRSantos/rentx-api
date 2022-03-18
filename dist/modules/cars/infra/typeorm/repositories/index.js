"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CategoriesRepository = require("./CategoriesRepository");

Object.keys(_CategoriesRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CategoriesRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CategoriesRepository[key];
    }
  });
});

var _SpecificationsRepository = require("./SpecificationsRepository");

Object.keys(_SpecificationsRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SpecificationsRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SpecificationsRepository[key];
    }
  });
});

var _CarsRepository = require("./CarsRepository");

Object.keys(_CarsRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CarsRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CarsRepository[key];
    }
  });
});
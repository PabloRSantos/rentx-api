"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CategoriesRepositoryInMemory = require("./CategoriesRepositoryInMemory");

Object.keys(_CategoriesRepositoryInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CategoriesRepositoryInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CategoriesRepositoryInMemory[key];
    }
  });
});

var _CarsRepositoryInMemory = require("./CarsRepositoryInMemory");

Object.keys(_CarsRepositoryInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CarsRepositoryInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CarsRepositoryInMemory[key];
    }
  });
});

var _SpecificationInMemory = require("./SpecificationInMemory");

Object.keys(_SpecificationInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SpecificationInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SpecificationInMemory[key];
    }
  });
});
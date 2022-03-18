"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ICategoriesRepository = require("./ICategoriesRepository");

Object.keys(_ICategoriesRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICategoriesRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICategoriesRepository[key];
    }
  });
});

var _ISpecificationRepository = require("./ISpecificationRepository");

Object.keys(_ISpecificationRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ISpecificationRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ISpecificationRepository[key];
    }
  });
});

var _ICarsRepository = require("./ICarsRepository");

Object.keys(_ICarsRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICarsRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICarsRepository[key];
    }
  });
});

var _ICarImagesRepository = require("./ICarImagesRepository");

Object.keys(_ICarImagesRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICarImagesRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICarImagesRepository[key];
    }
  });
});
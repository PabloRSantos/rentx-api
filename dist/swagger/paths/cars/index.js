"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _categoriesPath = require("./categoriesPath");

Object.keys(_categoriesPath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _categoriesPath[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _categoriesPath[key];
    }
  });
});

var _carsPath = require("./carsPath");

Object.keys(_carsPath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _carsPath[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _carsPath[key];
    }
  });
});

var _specificationsPath = require("./specificationsPath");

Object.keys(_specificationsPath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _specificationsPath[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _specificationsPath[key];
    }
  });
});

var _carImagesPath = require("./carImagesPath");

Object.keys(_carImagesPath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _carImagesPath[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _carImagesPath[key];
    }
  });
});
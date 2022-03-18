"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _categories = require("./categories.schema");

Object.keys(_categories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _categories[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _categories[key];
    }
  });
});

var _specifications = require("./specifications.schema");

Object.keys(_specifications).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _specifications[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _specifications[key];
    }
  });
});

var _cars = require("./cars.schema");

Object.keys(_cars).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cars[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cars[key];
    }
  });
});
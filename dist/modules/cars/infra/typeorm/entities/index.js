"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Category = require("./Category");

Object.keys(_Category).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Category[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Category[key];
    }
  });
});

var _Specification = require("./Specification");

Object.keys(_Specification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Specification[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Specification[key];
    }
  });
});

var _Car = require("./Car");

Object.keys(_Car).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Car[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Car[key];
    }
  });
});

var _CarImage = require("./CarImage");

Object.keys(_CarImage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CarImage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CarImage[key];
    }
  });
});
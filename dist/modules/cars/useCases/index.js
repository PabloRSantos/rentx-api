"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _category = require("./category");

Object.keys(_category).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _category[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _category[key];
    }
  });
});

var _specification = require("./specification");

Object.keys(_specification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _specification[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _specification[key];
    }
  });
});
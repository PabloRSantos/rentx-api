"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _car = require("./car");

Object.keys(_car).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _car[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _car[key];
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require("./models");

Object.keys(_models).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _models[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _models[key];
    }
  });
});

var _inMemory = require("./in-memory");

Object.keys(_inMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inMemory[key];
    }
  });
});
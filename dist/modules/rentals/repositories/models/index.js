"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IRentalsRepository = require("./IRentalsRepository");

Object.keys(_IRentalsRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IRentalsRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IRentalsRepository[key];
    }
  });
});
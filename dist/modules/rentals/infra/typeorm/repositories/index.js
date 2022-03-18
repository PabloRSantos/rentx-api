"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RentalsRepository = require("./RentalsRepository");

Object.keys(_RentalsRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RentalsRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RentalsRepository[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RentalsRepositoryInMemory = require("./RentalsRepositoryInMemory");

Object.keys(_RentalsRepositoryInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RentalsRepositoryInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RentalsRepositoryInMemory[key];
    }
  });
});
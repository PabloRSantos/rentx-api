"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RentalRepositoryFactory = require("./RentalRepositoryFactory");

Object.keys(_RentalRepositoryFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RentalRepositoryFactory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RentalRepositoryFactory[key];
    }
  });
});
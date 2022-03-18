"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ICreateRentalDTO = require("./ICreateRentalDTO");

Object.keys(_ICreateRentalDTO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICreateRentalDTO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICreateRentalDTO[key];
    }
  });
});
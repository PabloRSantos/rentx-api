"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rental = require("./Rental");

Object.keys(_Rental).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Rental[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Rental[key];
    }
  });
});
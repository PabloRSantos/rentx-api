"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JwtAdapter = require("./JwtAdapter");

Object.keys(_JwtAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _JwtAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _JwtAdapter[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IDateAdapter = require("./IDateAdapter");

Object.keys(_IDateAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IDateAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IDateAdapter[key];
    }
  });
});
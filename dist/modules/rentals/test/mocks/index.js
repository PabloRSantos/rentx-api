"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rental = require("./rental");

Object.keys(_rental).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rental[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rental[key];
    }
  });
});
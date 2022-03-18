"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sessionsPaths = require("./sessionsPaths");

Object.keys(_sessionsPaths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sessionsPaths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sessionsPaths[key];
    }
  });
});
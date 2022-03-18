"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require("./http");

Object.keys(_http).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _http[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _http[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _middlewareAdapter = require("./middlewareAdapter");

Object.keys(_middlewareAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _middlewareAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _middlewareAdapter[key];
    }
  });
});

var _routeAdapter = require("./routeAdapter");

Object.keys(_routeAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _routeAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _routeAdapter[key];
    }
  });
});
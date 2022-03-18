"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ensureAuthenticated = require("./ensureAuthenticated");

Object.keys(_ensureAuthenticated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ensureAuthenticated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureAuthenticated[key];
    }
  });
});

var _ensureAdmin = require("./ensureAdmin");

Object.keys(_ensureAdmin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ensureAdmin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureAdmin[key];
    }
  });
});
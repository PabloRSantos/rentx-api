"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require("./errors");

Object.keys(_errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _errors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _errors[key];
    }
  });
});

var _responses = require("./responses");

Object.keys(_responses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _responses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _responses[key];
    }
  });
});
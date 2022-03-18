"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authComponent = require("./authComponent");

Object.keys(_authComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _authComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _authComponent[key];
    }
  });
});
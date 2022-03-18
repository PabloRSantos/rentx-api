"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DayJsAdapterFactory = require("./DayJsAdapterFactory");

Object.keys(_DayJsAdapterFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DayJsAdapterFactory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DayJsAdapterFactory[key];
    }
  });
});
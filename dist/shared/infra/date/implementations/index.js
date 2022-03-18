"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DayJsAdapter = require("./DayJsAdapter");

Object.keys(_DayJsAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DayJsAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DayJsAdapter[key];
    }
  });
});
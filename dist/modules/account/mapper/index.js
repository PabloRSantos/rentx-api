"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserMap = require("./UserMap");

Object.keys(_UserMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UserMap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UserMap[key];
    }
  });
});
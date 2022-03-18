"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IMailAdapter = require("./IMailAdapter");

Object.keys(_IMailAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IMailAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IMailAdapter[key];
    }
  });
});
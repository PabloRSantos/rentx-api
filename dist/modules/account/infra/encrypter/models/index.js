"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IEncrypter = require("./IEncrypter");

Object.keys(_IEncrypter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IEncrypter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IEncrypter[key];
    }
  });
});

var _IDecrypter = require("./IDecrypter");

Object.keys(_IDecrypter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IDecrypter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IDecrypter[key];
    }
  });
});
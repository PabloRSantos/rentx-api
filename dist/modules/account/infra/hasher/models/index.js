"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IHasher = require("./IHasher");

Object.keys(_IHasher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IHasher[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IHasher[key];
    }
  });
});

var _IHashCompare = require("./IHashCompare");

Object.keys(_IHashCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IHashCompare[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IHashCompare[key];
    }
  });
});
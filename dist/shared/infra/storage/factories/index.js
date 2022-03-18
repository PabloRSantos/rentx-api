"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _S3AdapterFactory = require("./S3AdapterFactory");

Object.keys(_S3AdapterFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _S3AdapterFactory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _S3AdapterFactory[key];
    }
  });
});

var _DiskAdapterFactory = require("./DiskAdapterFactory");

Object.keys(_DiskAdapterFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DiskAdapterFactory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DiskAdapterFactory[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DiskStorageAdapter = require("./DiskStorageAdapter");

Object.keys(_DiskStorageAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DiskStorageAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DiskStorageAdapter[key];
    }
  });
});

var _S3StorageAdapter = require("./S3StorageAdapter");

Object.keys(_S3StorageAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _S3StorageAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _S3StorageAdapter[key];
    }
  });
});
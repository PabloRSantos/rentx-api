"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDiskStorageAdapter = void 0;

var _implementations = require("../implementations");

const makeDiskStorageAdapter = () => {
  return new _implementations.DiskStorageAdapter();
};

exports.makeDiskStorageAdapter = makeDiskStorageAdapter;
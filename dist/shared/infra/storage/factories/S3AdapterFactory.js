"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeS3StorageAdapter = void 0;

var _implementations = require("../implementations");

const makeS3StorageAdapter = () => {
  return new _implementations.S3StorageAdapter();
};

exports.makeS3StorageAdapter = makeS3StorageAdapter;
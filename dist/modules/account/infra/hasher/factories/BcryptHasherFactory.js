"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBcryptHasher = void 0;

var _implementations = require("../implementations");

const makeBcryptHasher = () => new _implementations.BcryptAdapter();

exports.makeBcryptHasher = makeBcryptHasher;
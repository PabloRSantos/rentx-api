"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBcryptHashCompare = void 0;

var _implementations = require("../implementations");

const makeBcryptHashCompare = () => new _implementations.BcryptAdapter();

exports.makeBcryptHashCompare = makeBcryptHashCompare;
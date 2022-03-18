"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeJwtDecrypter = void 0;

var _implementations = require("../implementations");

const makeJwtDecrypter = () => new _implementations.JwtAdapter();

exports.makeJwtDecrypter = makeJwtDecrypter;
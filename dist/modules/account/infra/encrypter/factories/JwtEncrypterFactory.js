"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeJwtEncrypter = void 0;

var _implementations = require("../implementations");

const makeJwtEncrypter = () => new _implementations.JwtAdapter();

exports.makeJwtEncrypter = makeJwtEncrypter;
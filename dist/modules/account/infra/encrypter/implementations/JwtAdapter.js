"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JwtAdapter = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _config = require("@/config");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class JwtAdapter {
  constructor() {
    _defineProperty(this, "secret", _config.authConfig.secret_token);
  }

  decrypt(value) {
    return (0, _jsonwebtoken.verify)(value, this.secret);
  }

  encrypt(value, options) {
    return (0, _jsonwebtoken.sign)(value, this.secret, options);
  }

}

exports.JwtAdapter = JwtAdapter;
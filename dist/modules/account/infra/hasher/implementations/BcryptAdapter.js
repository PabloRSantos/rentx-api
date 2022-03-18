"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BcryptAdapter = void 0;

var _bcrypt = require("bcrypt");

class BcryptAdapter {
  compare(value, hash) {
    return (0, _bcrypt.compare)(value, hash);
  }

  hash(value, salt) {
    return (0, _bcrypt.hash)(value, salt);
  }

}

exports.BcryptAdapter = BcryptAdapter;
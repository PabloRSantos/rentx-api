"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EncrypterInMemory = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EncrypterInMemory {
  constructor() {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "options", void 0);
  }

  encrypt(value, options) {
    this.value = value;
    this.options = options;
    return String(value);
  }

}

exports.EncrypterInMemory = EncrypterInMemory;
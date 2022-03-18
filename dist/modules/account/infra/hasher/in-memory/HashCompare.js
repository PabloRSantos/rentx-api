"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashCompareInMemory = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HashCompareInMemory {
  constructor() {
    _defineProperty(this, "params", {
      value: "",
      hash: ""
    });

    _defineProperty(this, "response", true);
  }

  async compare(value, hash) {
    this.params = {
      value,
      hash
    };
    return this.response;
  }

}

exports.HashCompareInMemory = HashCompareInMemory;
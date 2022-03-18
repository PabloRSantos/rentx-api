"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSESAdapter = void 0;

var _implementations = require("../implementations");

const makeSESAdapter = () => {
  return new _implementations.SESAdapter();
};

exports.makeSESAdapter = makeSESAdapter;
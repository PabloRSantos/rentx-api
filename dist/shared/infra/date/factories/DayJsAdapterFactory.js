"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDayJsAdapter = void 0;

var _implementations = require("../implementations");

const makeDayJsAdapter = () => {
  return new _implementations.DayJsAdapter();
};

exports.makeDayJsAdapter = makeDayJsAdapter;
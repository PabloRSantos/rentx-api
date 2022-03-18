"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEtheralAdapter = void 0;

var _implementations = require("../implementations");

const makeEtheralAdapter = () => {
  return new _implementations.EtherealAdapter();
};

exports.makeEtheralAdapter = makeEtheralAdapter;
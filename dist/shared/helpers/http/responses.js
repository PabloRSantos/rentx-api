"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ok = exports.noContent = void 0;

const ok = data => ({
  statusCode: 200,
  body: data
});

exports.ok = ok;

const noContent = () => ({
  statusCode: 204,
  body: null
});

exports.noContent = noContent;
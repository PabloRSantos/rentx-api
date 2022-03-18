"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require("./controller");

Object.keys(_controller).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _controller[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _controller[key];
    }
  });
});

var _http = require("./http");

Object.keys(_http).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _http[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _http[key];
    }
  });
});

var _middleware = require("./middleware");

Object.keys(_middleware).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _middleware[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _middleware[key];
    }
  });
});
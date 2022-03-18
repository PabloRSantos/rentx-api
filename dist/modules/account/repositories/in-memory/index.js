"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersRepositoryInMemory = require("./UsersRepositoryInMemory");

Object.keys(_UsersRepositoryInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UsersRepositoryInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UsersRepositoryInMemory[key];
    }
  });
});

var _UsersTokensRepositoryInMemory = require("./UsersTokensRepositoryInMemory");

Object.keys(_UsersTokensRepositoryInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UsersTokensRepositoryInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UsersTokensRepositoryInMemory[key];
    }
  });
});
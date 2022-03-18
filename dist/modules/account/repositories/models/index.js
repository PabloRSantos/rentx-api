"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IUsersRepository = require("./IUsersRepository");

Object.keys(_IUsersRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IUsersRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IUsersRepository[key];
    }
  });
});

var _IUsersTokensRepository = require("./IUsersTokensRepository");

Object.keys(_IUsersTokensRepository).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IUsersTokensRepository[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IUsersTokensRepository[key];
    }
  });
});
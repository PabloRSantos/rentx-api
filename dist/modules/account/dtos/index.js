"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ICreateUserDTO = require("./ICreateUserDTO");

Object.keys(_ICreateUserDTO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICreateUserDTO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICreateUserDTO[key];
    }
  });
});

var _IUpdateUserAvatarDTO = require("./IUpdateUserAvatarDTO");

Object.keys(_IUpdateUserAvatarDTO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IUpdateUserAvatarDTO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IUpdateUserAvatarDTO[key];
    }
  });
});

var _ICreateUserTokenDTO = require("./ICreateUserTokenDTO");

Object.keys(_ICreateUserTokenDTO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICreateUserTokenDTO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ICreateUserTokenDTO[key];
    }
  });
});

var _IUserResponseDTO = require("./IUserResponseDTO");

Object.keys(_IUserResponseDTO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IUserResponseDTO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IUserResponseDTO[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetUserProfileController = void 0;

var _factories = require("../../repositories/factories");

var _GetUserProfileController = require("./GetUserProfileController");

var _GetUserProfileUseCase = require("./GetUserProfileUseCase");

const makeGetUserProfileController = () => {
  const getUserProfileUseCase = new _GetUserProfileUseCase.GetUserProfileUseCase((0, _factories.makeUsersRepository)());
  const getUserProfileController = new _GetUserProfileController.GetUserProfileController(getUserProfileUseCase);
  return getUserProfileController;
};

exports.makeGetUserProfileController = makeGetUserProfileController;
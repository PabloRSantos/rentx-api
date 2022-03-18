"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUpdateUserAvatarController = void 0;

var _factories = require("../../../../shared/infra/storage/factories");

var _factories2 = require("../../repositories/factories");

var _UpdateUserAvatarController = require("./UpdateUserAvatarController");

var _UpdateUserAvatarUseCase = require("./UpdateUserAvatarUseCase");

const makeUpdateUserAvatarController = () => {
  const updateUserAvatarUseCase = new _UpdateUserAvatarUseCase.UpdateUserAvatarUseCase((0, _factories2.makeUsersRepository)(), (0, _factories.makeDiskStorageAdapter)());
  const updateUserAvatarController = new _UpdateUserAvatarController.UpdateUserAvatarController(updateUserAvatarUseCase);
  return updateUserAvatarController;
};

exports.makeUpdateUserAvatarController = makeUpdateUserAvatarController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserAvatarController = void 0;

var _helpers = require("../../../../shared/helpers");

class UpdateUserAvatarController {
  constructor(updateUserAvatarUseCase) {
    this.updateUserAvatarUseCase = updateUserAvatarUseCase;
  }

  async handle({
    file,
    userId
  }) {
    const avatarFile = file.filename;
    await this.updateUserAvatarUseCase.execute({
      avatarFile,
      userId
    });
    return (0, _helpers.noContent)();
  }

}

exports.UpdateUserAvatarController = UpdateUserAvatarController;
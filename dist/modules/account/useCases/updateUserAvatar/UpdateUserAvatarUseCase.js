"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserAvatarUseCase = void 0;

class UpdateUserAvatarUseCase {
  constructor(usersRepository, storage) {
    this.usersRepository = usersRepository;
    this.storage = storage;
  }

  async execute({
    avatarFile,
    userId
  }) {
    const user = await this.usersRepository.findById(userId);

    if (user.avatar) {
      await this.storage.deleteFile(user.avatar, `./tmp/avatar/`);
    }

    await this.storage.saveFile(avatarFile, "avatar");
    user.avatar = avatarFile;
    await this.usersRepository.create(user);
  }

}

exports.UpdateUserAvatarUseCase = UpdateUserAvatarUseCase;
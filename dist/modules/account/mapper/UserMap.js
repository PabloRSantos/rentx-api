"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMap = void 0;

class UserMap {
  static toDTO({
    email,
    name,
    id,
    avatar,
    driver_license
  }) {
    const avatarUrl = avatar ? `${process.env.STORAGE_URL}/avatar/${avatar}` : null;
    return {
      email,
      name,
      id,
      avatar,
      avatar_url: avatarUrl,
      driver_license
    };
  }

}

exports.UserMap = UserMap;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnsureAdmin = void 0;

var _helpers = require("../../helpers");

class EnsureAdmin {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async handle(httpRequest) {
    const {
      userId
    } = httpRequest;
    const user = await this.usersRepository.findById(userId);

    if (!user.isAdmin) {
      throw new _helpers.BadRequestError("User isn't admin!");
    }

    return (0, _helpers.noContent)();
  }

}

exports.EnsureAdmin = EnsureAdmin;
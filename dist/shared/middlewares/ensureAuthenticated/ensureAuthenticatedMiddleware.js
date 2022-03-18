"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnsureAuthenticated = void 0;

var _helpers = require("../../helpers");

class EnsureAuthenticated {
  constructor(decrypter, usersRepository) {
    this.decrypter = decrypter;
    this.usersRepository = usersRepository;
  }

  async handle(httpRequest) {
    const authHeader = httpRequest.headers.authorization;

    if (!authHeader) {
      throw new _helpers.BadRequestError("Token is missing");
    }

    const [, token] = authHeader.split(" ");
    let userId = "";

    try {
      const {
        sub
      } = this.decrypter.decrypt(token);
      userId = sub;
    } catch (error) {
      throw new _helpers.BadRequestError("Invalid token");
    }

    const userExist = await this.usersRepository.findById(userId);

    if (!userExist) {
      throw new _helpers.NotFoundError("User not found");
    }

    return (0, _helpers.ok)({
      userId
    });
  }

}

exports.EnsureAuthenticated = EnsureAuthenticated;
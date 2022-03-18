"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;

var _helpers = require("@/shared/helpers");

class CreateUserUseCase {
  constructor(usersRepository, hasher) {
    this.usersRepository = usersRepository;
    this.hasher = hasher;
  }

  async execute({
    password,
    email,
    ...rest
  }) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new _helpers.BadRequestError("User already exists");
    }

    const passwordHash = await this.hasher.hash(password, 8);
    const user = await this.usersRepository.create({ ...rest,
      email,
      password: passwordHash
    });
    delete user.password;
    return user;
  }

}

exports.CreateUserUseCase = CreateUserUseCase;
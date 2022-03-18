"use strict";

var _helpers = require("../../../../shared/helpers");

var _implementations = require("../../../../shared/infra/date/implementations");

var _inMemory = require("../../infra/encrypter/in-memory");

var _inMemory2 = require("../../infra/hasher/in-memory");

var _repositories = require("../../repositories");

var _mocks = require("../../test/mocks");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

let authenticateUserUseCase;
let usersRepositoryInMemory;
let encrypterInMemory;
let hashCompareInMemory;
let usersTokensRepositoryInMemory;
let dateAdapter;
describe("Authenticate User", () => {
  beforeEach(() => {
    hashCompareInMemory = new _inMemory2.HashCompareInMemory();
    encrypterInMemory = new _inMemory.EncrypterInMemory();
    usersRepositoryInMemory = new _repositories.UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new _repositories.UsersTokensRepositoryInMemory();
    dateAdapter = new _implementations.DayJsAdapter();
    authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(hashCompareInMemory, encrypterInMemory, usersRepositoryInMemory, usersTokensRepositoryInMemory, dateAdapter);
  });
  it("should be able to authenticate an user", async () => {
    const user = await usersRepositoryInMemory.create((0, _mocks.makeUser)());
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: "password"
    });
    expect(hashCompareInMemory.params).toMatchObject({
      value: "password",
      hash: user.password
    });
    expect(encrypterInMemory.options).toMatchObject({
      subject: user.id,
      expiresIn: "30d"
    });
    expect(result).toHaveProperty("token");
  });
  it("should not be able to authenticate an nonexistent user", async () => {
    const promise = authenticateUserUseCase.execute({
      email: "false@email.com",
      password: "password"
    });
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Email or password incorrect"));
  });
  it("should not be able to authenticate an user if password not match", async () => {
    const user = await usersRepositoryInMemory.create((0, _mocks.makeUser)());
    hashCompareInMemory.response = false;
    const promise = authenticateUserUseCase.execute({
      email: user.email,
      password: "wrong_password"
    });
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Email or password incorrect"));
  });
});
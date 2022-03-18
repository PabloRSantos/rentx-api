"use strict";

var _helpers = require("../../../../shared/helpers");

var _implementations = require("../../../../shared/infra/date/implementations");

var _inMemory = require("../../../../shared/infra/mail/in-memory");

var _repositories = require("../../repositories");

var _mocks = require("../../test/mocks");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let usersTokensRepositoryInMemory;
let dateAdapter;
let mailAdapter;
describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _repositories.UsersRepositoryInMemory();
    dateAdapter = new _implementations.DayJsAdapter();
    usersTokensRepositoryInMemory = new _repositories.UsersTokensRepositoryInMemory();
    mailAdapter = new _inMemory.MailAdapterInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dateAdapter, mailAdapter);
  });
  it("should be able to send a forgot password mail to user", async () => {
    const sendMailSpy = jest.spyOn(mailAdapter, "sendMail");
    const user = await usersRepositoryInMemory.create((0, _mocks.makeUser)());
    await sendForgotPasswordMailUseCase.execute({
      email: user.email
    });
    expect(sendMailSpy).toHaveBeenCalled();
  });
  it("should not be able to send an email if user does not exists", async () => {
    const promise = sendForgotPasswordMailUseCase.execute({
      email: "any_email"
    });
    await expect(promise).rejects.toEqual(new _helpers.NotFoundError("User does not exists!"));
  });
  it("should be able to create an users token", async () => {
    const usersTokensRepositorySpy = jest.spyOn(usersTokensRepositoryInMemory, "create");
    const user = await usersRepositoryInMemory.create((0, _mocks.makeUser)());
    await sendForgotPasswordMailUseCase.execute({
      email: user.email
    });
    expect(usersTokensRepositorySpy).toHaveBeenCalled();
  });
});
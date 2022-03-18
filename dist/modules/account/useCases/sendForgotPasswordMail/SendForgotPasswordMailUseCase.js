"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendForgotPasswordMailUseCase = void 0;

var _path = require("path");

var _uuid = require("uuid");

var _helpers = require("../../../../shared/helpers");

class SendForgotPasswordMailUseCase {
  constructor(usersRepository, usersTokensRepository, dateAdapter, mailAdapter) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dateAdapter = dateAdapter;
    this.mailAdapter = mailAdapter;
  }

  async execute({
    email
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _helpers.NotFoundError("User does not exists!");
    }

    const templatePath = (0, _path.resolve)(__dirname, "..", "..", "views", "mails", "forgotPassword.hbs");
    const token = (0, _uuid.v4)();
    const expiresDate = this.dateAdapter.addHours(this.dateAdapter.dateNow(), 3);
    await this.usersTokensRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date: expiresDate
    });
    const variables = {
      name: user.name,
      link: `${process.env.BASE_URL}/password/reset?token=${token}`
    };
    await this.mailAdapter.sendMail(email, "Recuperação de senha", variables, templatePath);
  }

}

exports.SendForgotPasswordMailUseCase = SendForgotPasswordMailUseCase;
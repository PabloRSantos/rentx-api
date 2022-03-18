"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SESAdapter = void 0;

var _awsSdk = require("aws-sdk");

var _fs = _interopRequireDefault(require("fs"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SESAdapter {
  constructor() {
    _defineProperty(this, "client", void 0);

    this.client = _nodemailer.default.createTransport({
      SES: new _awsSdk.SES({
        region: process.env.AWS_REGION
      })
    });
  }

  async sendMail(to, subject, variables, path) {
    const templateFileContent = _fs.default.readFileSync(path).toString("utf-8");

    const templateParse = _handlebars.default.compile(templateFileContent);

    const templateHTML = templateParse(variables);
    await this.client.sendMail({
      to,
      from: `Rentx <${process.env.AWS_SES_EMAIL}>`,
      subject,
      html: templateHTML
    });
  }

}

exports.SESAdapter = SESAdapter;
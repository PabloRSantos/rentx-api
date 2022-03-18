"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailAdapterInMemory = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MailAdapterInMemory {
  constructor() {
    _defineProperty(this, "messages", []);
  }

  async sendMail(to, subject, variables, path) {
    this.messages.push({
      to,
      subject,
      variables,
      path
    });
  }

}

exports.MailAdapterInMemory = MailAdapterInMemory;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerError = exports.NotFoundError = exports.BadRequestError = exports.AppError = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AppError {
  constructor() {
    _defineProperty(this, "message", void 0);

    _defineProperty(this, "statusCode", void 0);
  }

}

exports.AppError = AppError;

class ServerError extends AppError {
  constructor(message) {
    super();

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "statusCode", void 0);

    this.message = message;
    this.statusCode = 500;
  }

}

exports.ServerError = ServerError;

class BadRequestError extends AppError {
  constructor(message) {
    super();

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "statusCode", void 0);

    this.message = message;
    this.statusCode = 400;
  }

}

exports.BadRequestError = BadRequestError;

class NotFoundError extends AppError {
  constructor(message) {
    super();

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "statusCode", void 0);

    this.message = message;
    this.statusCode = 404;
  }

}

exports.NotFoundError = NotFoundError;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUser = void 0;

const makeUser = () => ({
  driver_license: "0001321",
  email: "user@test.com",
  password: "hash_password",
  name: "user test"
});

exports.makeUser = makeUser;
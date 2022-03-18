"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSessionsSchema = void 0;
const createSessionsSchema = {
  type: "object",
  properties: {
    email: {
      type: "string"
    },
    password: {
      type: "string"
    }
  },
  example: {
    email: "any_email",
    password: "any_password"
  }
};
exports.createSessionsSchema = createSessionsSchema;
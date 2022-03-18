"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authComponent = void 0;
const authComponent = {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT"
    }
  }
};
exports.authComponent = authComponent;
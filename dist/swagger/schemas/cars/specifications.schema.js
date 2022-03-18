"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpecificationSchema = void 0;
const createSpecificationSchema = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    description: {
      type: "string"
    }
  },
  example: {
    name: "any_specification",
    description: "any_description"
  }
};
exports.createSpecificationSchema = createSpecificationSchema;
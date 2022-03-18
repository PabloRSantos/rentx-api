"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadCategorySchema = exports.createCategorySchema = exports.categorySchema = void 0;
const createCategorySchema = {
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
    name: "any_category",
    description: "any_description"
  }
};
exports.createCategorySchema = createCategorySchema;
const categorySchema = {
  type: "object",
  properties: {
    id: {
      type: "string"
    },
    name: {
      type: "string"
    },
    description: {
      type: "string"
    },
    created_at: {
      type: "string"
    }
  }
};
exports.categorySchema = categorySchema;
const uploadCategorySchema = {
  type: "object",
  properties: {
    file: {
      type: "string",
      format: "binary"
    }
  }
};
exports.uploadCategorySchema = uploadCategorySchema;
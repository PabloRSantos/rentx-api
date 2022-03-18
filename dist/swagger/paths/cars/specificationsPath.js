"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specificationsPath = void 0;
const specificationsPath = {
  post: {
    tags: ["Specifications"],
    summary: "Create a specification",
    description: "Create a new specification",
    security: [{
      bearerAuth: []
    }],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createSpecification"
          }
        }
      }
    },
    responses: {
      201: {
        description: "Created"
      },
      500: {
        description: "Specification already exists"
      }
    }
  }
};
exports.specificationsPath = specificationsPath;
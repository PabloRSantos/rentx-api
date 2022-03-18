"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptRoute = void 0;

var _helpers = require("@/shared/helpers");

const adaptRoute = controller => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      file: req.file,
      files: req.files,
      userId: req?.userId,
      query: req.query
    };

    try {
      const httpResponse = await controller.handle(httpRequest);
      return res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
      if (error instanceof _helpers.AppError) {
        return res.status(error.statusCode).json({
          error: error.message
        });
      }

      console.log(error.message);
      return res.status(500).json({
        error: "Internal server error"
      });
    }
  };
};

exports.adaptRoute = adaptRoute;
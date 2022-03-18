"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptMiddleware = void 0;

var _helpers = require("../../helpers");

const adaptMiddleware = middleware => {
  return async (req, res, next) => {
    const httpRequest = {
      headers: req.headers,
      userId: req.userId
    };

    try {
      const httpResponse = await middleware.handle(httpRequest);
      Object.assign(req, httpResponse.body);
      return next();
    } catch (error) {
      if (error instanceof _helpers.AppError) return res.status(error.statusCode).json({
        error: error.message
      });
      console.log(error.message);
      return res.status(500).json({
        error: "Internal server error"
      });
    }
  };
};

exports.adaptMiddleware = adaptMiddleware;
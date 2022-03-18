"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeConnection = void 0;

var _typeorm = require("typeorm");

const makeConnection = async (host = "database") => {
  const options = await (0, _typeorm.getConnectionOptions)();
  const isTest = process.env.NODE_ENV === "test";
  Object.assign(options, {
    host: isTest ? "localhost" : host,
    database: isTest ? "rentx_test" : options.database
  });
  return (0, _typeorm.createConnection)(options);
};

exports.makeConnection = makeConnection;
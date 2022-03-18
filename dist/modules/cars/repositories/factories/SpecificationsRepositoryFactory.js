"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSpecificationsRepository = void 0;

var _repositories = require("../../infra/typeorm/repositories");

const makeSpecificationsRepository = () => {
  return new _repositories.SpecificationRepository();
};

exports.makeSpecificationsRepository = makeSpecificationsRepository;
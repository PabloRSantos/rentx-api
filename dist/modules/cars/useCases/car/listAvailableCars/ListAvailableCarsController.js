"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAvailableCarsController = void 0;

var _http = require("@/shared/helpers/http");

class ListAvailableCarsController {
  constructor(listAvailableCarsUseCase) {
    this.listAvailableCarsUseCase = listAvailableCarsUseCase;
  }

  async handle({
    query
  }) {
    const {
      name,
      brand,
      category_id
    } = query;
    const cars = await this.listAvailableCarsUseCase.execute({
      name,
      brand,
      category_id
    });
    return (0, _http.ok)(cars);
  }

}

exports.ListAvailableCarsController = ListAvailableCarsController;
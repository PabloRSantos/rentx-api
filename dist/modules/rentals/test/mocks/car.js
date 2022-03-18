"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCar = void 0;

const makeCar = () => ({
  name: "Test",
  description: "Car Test",
  daily_rate: 100,
  license_plate: "test",
  fine_amount: 40,
  category_id: "1234",
  brand: "brand"
});

exports.makeCar = makeCar;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCar = void 0;

const makeCar = () => ({
  name: "Name Car",
  description: "Description Car",
  daily_rate: 100,
  license_plate: "ABC-1234",
  fine_amount: 60,
  brand: "Brand",
  category_id: "Category"
});

exports.makeCar = makeCar;
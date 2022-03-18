"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRental = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeRental = ({
  user_id = "123",
  car_id = "321",
  expected_return_date = (0, _dayjs.default)().add(1, "day").toDate()
} = {}) => ({
  user_id,
  car_id,
  expected_return_date
});

exports.makeRental = makeRental;
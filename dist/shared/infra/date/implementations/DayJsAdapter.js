"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayJsAdapter = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs.default.extend(_utc.default);

class DayJsAdapter {
  compareIfBefore(start_date, end_date) {
    return (0, _dayjs.default)(start_date).isBefore(end_date);
  }

  addHours(currentDate, hours) {
    return (0, _dayjs.default)(currentDate).add(hours, "hours").toDate();
  }

  addDays(currentDate, days) {
    return (0, _dayjs.default)(currentDate).add(days, "days").toDate();
  }

  dateNow() {
    return (0, _dayjs.default)().toDate();
  }

  convertToUTC(date) {
    return (0, _dayjs.default)(date).utc().local().format();
  }

  compareInHours(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    const compare = (0, _dayjs.default)(end_date_utc).diff((0, _dayjs.default)(start_date_utc), "hours");
    return compare;
  }

  compareInDays(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    const compare = (0, _dayjs.default)(end_date_utc).diff((0, _dayjs.default)(start_date_utc), "days");
    return compare;
  }

}

exports.DayJsAdapter = DayJsAdapter;
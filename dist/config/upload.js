"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadConfig = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UploadConfig {
  static upload() {
    return (0, _multer.default)({
      storage: _multer.default.diskStorage({
        destination: (0, _path.resolve)(UploadConfig.tempFolder),
        filename: (_, file, callback) => {
          const fileName = `${new Date().getTime()}-${file.originalname}`;
          return callback(null, fileName);
        }
      })
    });
  }

}

exports.UploadConfig = UploadConfig;

_defineProperty(UploadConfig, "tempFolder", (0, _path.resolve)(__dirname, "..", "..", "tmp"));
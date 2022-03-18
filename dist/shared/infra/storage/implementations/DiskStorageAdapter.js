"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiskStorageAdapter = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = require("../../../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DiskStorageAdapter {
  async saveFile(filename, folder) {
    await _fs.default.promises.rename(_path.default.resolve(_config.UploadConfig.tempFolder, filename), _path.default.resolve(_config.UploadConfig.tempFolder, folder, filename));
    return filename;
  }

  async deleteFile(filename, folder) {
    const file = _path.default.resolve(_config.UploadConfig.tempFolder, folder, filename);

    try {
      await _fs.default.promises.stat(file);
    } catch (error) {
      return;
    }

    await _fs.default.promises.unlink(file);
  }

}

exports.DiskStorageAdapter = DiskStorageAdapter;
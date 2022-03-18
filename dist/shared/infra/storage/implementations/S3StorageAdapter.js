"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3StorageAdapter = void 0;

var _awsSdk = require("aws-sdk");

var _fs = _interopRequireDefault(require("fs"));

var _mime = _interopRequireDefault(require("mime"));

var _path = _interopRequireDefault(require("path"));

var _config = require("../../../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class S3StorageAdapter {
  constructor() {
    _defineProperty(this, "client", void 0);

    this.client = new _awsSdk.S3({
      region: process.env.AWS_REGION
    });
  }

  async deleteFile(filename, folder) {
    await this.client.deleteObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: filename
    }).promise();
  }

  async saveFile(filename, folder) {
    const originalName = _path.default.resolve(_config.UploadConfig.tempFolder, filename);

    const fileContent = await _fs.default.promises.readFile(originalName);

    const contentType = _mime.default.getType(originalName);

    await this.client.putObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: filename,
      ACL: "public-read",
      Body: fileContent,
      ContentType: contentType
    }).promise();
    await _fs.default.promises.unlink(originalName);
    return filename;
  }

}

exports.S3StorageAdapter = S3StorageAdapter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUploadCarImageController = void 0;

var _factories = require("../../../repositories/factories");

var _factories2 = require("../../../../../shared/infra/storage/factories");

var _UploadCarImageController = require("./UploadCarImageController");

var _UploadCarImageUseCase = require("./UploadCarImageUseCase");

const makeUploadCarImageController = () => {
  const uploadCarImageUseCase = new _UploadCarImageUseCase.UploadCarImageUseCase((0, _factories.makeCarImagesRepository)(), (0, _factories2.makeDiskStorageAdapter)());
  const uploadCarImageController = new _UploadCarImageController.UploadCarImageController(uploadCarImageUseCase);
  return uploadCarImageController;
};

exports.makeUploadCarImageController = makeUploadCarImageController;
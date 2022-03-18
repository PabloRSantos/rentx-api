"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadCarImageController = void 0;

var _helpers = require("../../../../../shared/helpers");

class UploadCarImageController {
  constructor(uploadCarImageUseCase) {
    this.uploadCarImageUseCase = uploadCarImageUseCase;
  }

  async handle(params) {
    const images = params.files;
    const {
      id
    } = params.params;
    const fileNames = images.map(image => image.filename);
    await this.uploadCarImageUseCase.execute({
      car_id: id,
      images_name: fileNames
    });
    return (0, _helpers.noContent)();
  }

}

exports.UploadCarImageController = UploadCarImageController;
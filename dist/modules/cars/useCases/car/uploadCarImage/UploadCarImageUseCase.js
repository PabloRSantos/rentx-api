"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadCarImageUseCase = void 0;

class UploadCarImageUseCase {
  constructor(carImagesRepository, storage) {
    this.carImagesRepository = carImagesRepository;
    this.storage = storage;
  }

  async execute({
    car_id,
    images_name
  }) {
    images_name.map(async image => {
      await this.storage.saveFile(image, "cars");
      await this.carImagesRepository.create(car_id, image);
    });
  }

}

exports.UploadCarImageUseCase = UploadCarImageUseCase;
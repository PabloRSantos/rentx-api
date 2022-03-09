import { makeCarImagesRepository } from "@/modules/cars/repositories/factories";
import { IController } from "@/shared/protocols";

import { UploadCarImageController } from "./UploadCarImageController";
import { UploadCarImageUseCase } from "./UploadCarImageUseCase";

export const makeUploadCarImageController = (): IController => {
    const uploadCarImageUseCase = new UploadCarImageUseCase(
        makeCarImagesRepository()
    );
    const uploadCarImageController = new UploadCarImageController(
        uploadCarImageUseCase
    );

    return uploadCarImageController;
};

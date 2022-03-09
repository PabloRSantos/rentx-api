import { ICarImagesRepository } from "@/modules/cars/repositories";

interface IRequest {
    car_id: string;
    images_name: string[];
}

export class UploadCarImageUseCase {
    constructor(private readonly carImagesRepository: ICarImagesRepository) {}

    async execute({ car_id, images_name }: IRequest): Promise<void> {
        images_name.map(async (image) => {
            await this.carImagesRepository.create(car_id, image);
        });
    }
}

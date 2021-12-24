import { ICategoriesRepository } from "@/modules/cars/repositories";
import { BadRequestError } from "@/shared/helpers";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    constructor(private readonly categoriesRepository: ICategoriesRepository) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new BadRequestError("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

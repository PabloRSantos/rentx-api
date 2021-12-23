import { ISpecificationRepository } from "../../repositories";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationUseCase {
    constructor(
        private readonly specificationRepository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName({ name });

        if (specificationAlreadyExists) {
            throw new Error(`Specification ${name} already exists`);
        }

        this.specificationRepository.create({ name, description });
    }
}

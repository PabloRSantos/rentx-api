import { getRepository, Repository } from "typeorm";

import { ISpecificationRepository } from "..";

import { ICreateSpecificationDTO } from "../../dtos";
import { Specification } from "../../entities";

export class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({ name, description });

        return this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne({ name });
    }
}

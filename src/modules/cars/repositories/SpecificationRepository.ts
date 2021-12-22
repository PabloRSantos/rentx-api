import { Specification } from "../model";
import { ISpecificationRepository } from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ description, name }: ISpecificationRepository.ICreateDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            description,
            name,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName({
        name,
    }: ISpecificationRepository.IFindByNameDTO): Specification {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }
}

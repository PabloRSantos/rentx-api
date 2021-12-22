import { Specification } from "../model";

export interface ISpecificationRepository {
    create(data: ISpecificationRepository.ICreateDTO): void;
    findByName(data: ISpecificationRepository.IFindByNameDTO): Specification;
}

export namespace ISpecificationRepository {
    export interface ICreateDTO {
        name: string;
        description: string;
    }

    export interface IFindByNameDTO {
        name: string;
    }
}

import { Specification } from "../../entities";

export interface ISpecificationRepository {
    create(data: ISpecificationRepository.ICreateDTO): void;
    findByName(
        data: ISpecificationRepository.IFindByNameDTO
    ): Promise<Specification>;
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

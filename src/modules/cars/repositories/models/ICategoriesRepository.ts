import { Category } from "../../entities";

export interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create(data: ICategoriesRepository.ICreateDTO): Promise<Category>;
}

export namespace ICategoriesRepository {
    export interface ICreateDTO {
        name: string;
        description: string;
    }
}

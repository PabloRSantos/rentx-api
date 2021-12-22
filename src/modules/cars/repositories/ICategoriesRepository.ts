import { Category } from "../model";

export interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create(data: ICategoriesRepository.ICreateDTO): void;
}

export namespace ICategoriesRepository {
    export interface ICreateDTO {
        name: string;
        description: string;
    }
}

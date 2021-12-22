import { Category } from "../model";

export interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create(data: ICategoriesRepository.ICreateDTO): void;
}

export namespace ICategoriesRepository {
    export interface ICreateDTO {
        name: string;
        description: string;
    }
}

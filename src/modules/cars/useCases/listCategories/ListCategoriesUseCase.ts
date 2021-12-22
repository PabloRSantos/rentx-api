import { Category } from "../../model";
import { ICategoriesRepository } from "../../repositories";

export class ListCategoriesUseCase {
    constructor(private readonly categoriesRepository: ICategoriesRepository) {}

    execute(): Promise<Category[]> {
        return this.categoriesRepository.list();
    }
}

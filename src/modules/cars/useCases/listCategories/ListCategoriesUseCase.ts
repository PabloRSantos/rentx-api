import { Category } from "../../entities";
import { ICategoriesRepository } from "../../repositories";

export class ListCategoriesUseCase {
    constructor(private readonly categoriesRepository: ICategoriesRepository) {}

    execute(): Promise<Category[]> {
        return this.categoriesRepository.list();
    }
}

import { Category } from "@/modules/cars/entities";
import { ICategoriesRepository } from "@/modules/cars/repositories";

export class ListCategoriesUseCase {
    constructor(private readonly categoriesRepository: ICategoriesRepository) {}

    execute(): Promise<Category[]> {
        return this.categoriesRepository.list();
    }
}

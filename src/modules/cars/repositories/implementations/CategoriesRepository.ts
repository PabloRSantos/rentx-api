import { ICategoriesRepository } from "..";

import { Category } from "../../model";

export class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];
    private static INSTANCE: ICategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): ICategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICategoriesRepository.ICreateDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category;
    }
}

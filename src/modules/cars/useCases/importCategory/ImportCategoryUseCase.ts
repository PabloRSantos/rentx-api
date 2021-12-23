import { rejects } from "assert";
import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { IFile } from "../../../../protocols";
import { ICategoriesRepository } from "../../repositories";

interface IRequest {
    file: IFile;
}

interface IImportCategory {
    name: string;
    description: string;
}

export class ImportCategoryUseCase {
    constructor(private readonly categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: IFile): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParse();
            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => reject(err));
        });
    }

    async execute({ file }: IRequest): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.forEach(async (category) => {
            const { name, description } = category;

            const existCategory = await this.categoriesRepository.findByName(
                name
            );

            if (!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

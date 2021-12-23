import { HttpResponse, IController } from "../../../../protocols";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController implements IController {
    constructor(
        private readonly listCategoriesUseCase: ListCategoriesUseCase
    ) {}

    async handle(): Promise<HttpResponse> {
        const categories = await this.listCategoriesUseCase.execute();

        return {
            statusCode: 200,
            body: categories,
        };
    }
}

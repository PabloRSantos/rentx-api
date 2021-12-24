import { IController } from "@/shared/protocols";

import { SpecificationRepository } from "../../../repositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export const makeCreateSpecificationController = (): IController => {
    const createSpecificationRepository = new SpecificationRepository();
    const createSpecificationUseCase = new CreateSpecificationUseCase(
        createSpecificationRepository
    );
    const createSpecificationController = new CreateSpecificationController(
        createSpecificationUseCase
    );

    return createSpecificationController;
};

import { SpecificationRepository } from "../../repositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export const makeCreateSpecificationController =
    (): CreateSpecificationController => {
        const createSpecificationRepository = new SpecificationRepository();
        const createSpecificationUseCase = new CreateSpecificationUseCase(
            createSpecificationRepository
        );
        const createSpecificationController = new CreateSpecificationController(
            createSpecificationUseCase
        );

        return createSpecificationController;
    };

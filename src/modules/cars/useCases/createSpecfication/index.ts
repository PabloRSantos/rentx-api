import { SpecificationRepository } from "../../repositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    createSpecificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };

import { IController } from "@/shared/protocols";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const makeCreateUserController = (): IController => {
    const createUserRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(createUserRepository);
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;
};

import { IController } from "@/shared/protocols";

import { BcryptAdapter } from "../../infra/hasher/implementations";
import { UsersRepository } from "../../infra/typeorm/repositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const makeCreateUserController = (): IController => {
    const createUserRepository = new UsersRepository();
    const hasher = new BcryptAdapter();
    const createUserUseCase = new CreateUserUseCase(
        createUserRepository,
        hasher
    );
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;
};

import { IController } from "@/shared/protocols";

import { BcryptAdapter } from "../../infra/hasher/implementations";
import { makeUsersRepository } from "../../repositories/factories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const makeCreateUserController = (): IController => {
    const hasher = new BcryptAdapter();
    const createUserUseCase = new CreateUserUseCase(
        makeUsersRepository(),
        hasher
    );
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;
};

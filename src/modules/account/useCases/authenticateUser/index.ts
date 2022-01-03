import { IController } from "@/shared/protocols";

import { JwtAdapter } from "../../infra/encrypter/implementations";
import { BcryptAdapter } from "../../infra/hasher/implementations";
import { UsersRepository } from "../../infra/typeorm/repositories";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export const makeAuthenticateUserController = (): IController => {
    const usersRepository = new UsersRepository();
    const hasherCompare = new BcryptAdapter();
    const encrypter = new JwtAdapter();
    const authenticateUserUseCase = new AuthenticateUserUseCase(
        hasherCompare,
        encrypter,
        usersRepository
    );

    const authenticateUserController = new AuthenticateUserController(
        authenticateUserUseCase
    );

    return authenticateUserController;
};

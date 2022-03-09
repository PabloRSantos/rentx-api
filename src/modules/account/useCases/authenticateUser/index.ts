import { IController } from "@/shared/protocols";

import { JwtAdapter } from "../../infra/encrypter/implementations";
import { BcryptAdapter } from "../../infra/hasher/implementations";
import { makeUsersRepository } from "../../repositories/factories";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export const makeAuthenticateUserController = (): IController => {
    const hasherCompare = new BcryptAdapter();
    const encrypter = new JwtAdapter();
    const authenticateUserUseCase = new AuthenticateUserUseCase(
        hasherCompare,
        encrypter,
        makeUsersRepository()
    );

    const authenticateUserController = new AuthenticateUserController(
        authenticateUserUseCase
    );

    return authenticateUserController;
};

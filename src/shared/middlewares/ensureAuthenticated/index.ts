import { JwtAdapter } from "@/modules/account/infra/encrypter/implementations";
import { UsersRepository } from "@/modules/account/infra/typeorm/repositories";
import { IMiddleware } from "@/shared/protocols";

import { EnsureAuthenticated } from "./ensureAuthenticatedMiddleware";

export const makeEnsureAuthenticatedMiddleware = (): IMiddleware => {
    const decrypter = new JwtAdapter();
    const usersRepository = new UsersRepository();
    const ensureAuthenticatedMiddleware = new EnsureAuthenticated(
        decrypter,
        usersRepository
    );

    return ensureAuthenticatedMiddleware;
};

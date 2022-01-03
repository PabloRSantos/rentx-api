import { BadRequestError } from "@/shared/helpers";

import { User } from "../../entities";
import { EncrypterInMemory } from "../../infra/encrypter/in-memory";
import { HashCompareInMemory } from "../../infra/hasher/in-memory";
import { IUsersRepository, UsersRepositoryInMemory } from "../../repositories";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: IUsersRepository;
let encrypterInMemory: EncrypterInMemory;
let hashCompareInMemory: HashCompareInMemory;

const makeUser = (): Promise<User> => {
    return usersRepositoryInMemory.create({
        driver_license: "0001321",
        email: "user@test.com",
        password: "hash_password",
        name: "user test",
    });
};

describe("Authenticate User", () => {
    beforeEach(() => {
        hashCompareInMemory = new HashCompareInMemory();
        encrypterInMemory = new EncrypterInMemory();
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            hashCompareInMemory,
            encrypterInMemory,
            usersRepositoryInMemory
        );
    });

    it("should be able to authenticate an user", async () => {
        const user = await makeUser();

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: "password",
        });

        expect(hashCompareInMemory.params).toMatchObject({
            value: "password",
            hash: user.password,
        });

        expect(encrypterInMemory.options).toMatchObject({
            subject: user.id,
            expiresIn: "1d",
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate an nonexistent user", async () => {
        const promise = authenticateUserUseCase.execute({
            email: "false@email.com",
            password: "password",
        });

        await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    });

    it("should not be able to authenticate an user if password not match", async () => {
        const user = await makeUser();
        hashCompareInMemory.response = false;
        const promise = authenticateUserUseCase.execute({
            email: user.email,
            password: "wrong_password",
        });

        await expect(promise).rejects.toBeInstanceOf(BadRequestError);
    });
});

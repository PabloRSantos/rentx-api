import { BadRequestError } from "@/shared/helpers";

import { IEncrypter } from "../../infra/encrypter/models";
import { IHashCompare } from "../../infra/hasher/models";
import { IUsersRepository } from "../../repositories/models";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

export class AuthenticateUserUseCase {
    constructor(
        private readonly hashCompare: IHashCompare,
        private readonly encrypter: IEncrypter,
        private readonly usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new BadRequestError("Email or password incorrect");
        }

        const passwordMatch = await this.hashCompare.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            throw new BadRequestError("Email or password incorrect");
        }

        const token = this.encrypter.encrypt(
            {},
            { subject: user.id, expiresIn: "1d" }
        );

        return {
            token,
            user: {
                name: user.name,
                email,
            },
        };
    }
}

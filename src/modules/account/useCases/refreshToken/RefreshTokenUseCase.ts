import { authConfig } from "@/config";
import { NotFoundError } from "@/shared/helpers";
import { IDateAdapter } from "@/shared/infra/date/models";

import { IDecrypter, IEncrypter } from "../../infra/encrypter/models";
import { IUsersTokensRepository } from "../../repositories";

interface IRequest {
    token: string;
}

export class RefreshTokenUseCase {
    constructor(
        private readonly decrypter: IDecrypter,
        private readonly usersTokensRepository: IUsersTokensRepository,
        private readonly encrypter: IEncrypter,
        private readonly dateAdapter: IDateAdapter
    ) {}

    async execute({ token }: IRequest) {
        const decode = this.decrypter.decrypt(token);
        const userId = decode.sub as string;

        const userToken =
            await this.usersTokensRepository.findByUserIdAndRefreshToken(
                userId,
                token
            );

        if (!userToken) {
            throw new NotFoundError("Refresh Token does not exists!");
        }

        await this.usersTokensRepository.deleteById(userToken.id);

        const refreshToken = this.encrypter.encrypt(
            { email: decode.email },
            { subject: userId, expiresIn: authConfig.expires_in_refresh_token }
        );
        const refreshTokenExpiresDate = this.dateAdapter.addDays(
            new Date(),
            authConfig.expires_refresh_token_days
        );
        await this.usersTokensRepository.create({
            expires_date: refreshTokenExpiresDate,
            refresh_token: refreshToken,
            user_id: userId,
        });

        return refreshToken;
    }
}

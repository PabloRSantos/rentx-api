import { ICreateUserDTO } from "../../dtos";
import { User } from "../../entities";
import { IUsersRepository } from "../../repositories/models/IUsersRepository";

export class CreateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}

    async execute(data: ICreateUserDTO): Promise<User> {
        return this.usersRepository.create(data);
    }
}

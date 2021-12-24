import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos";
import { User } from "../../entities";
import { IUsersRepository } from "../models/IUsersRepository";

export class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email });
    }

    async create(data: ICreateUserDTO): Promise<User> {
        const user = this.repository.create(data);
        return this.repository.save(user);
    }
}
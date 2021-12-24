import { ICreateUserDTO } from "../../dtos";
import { User } from "../../entities";

export interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
}

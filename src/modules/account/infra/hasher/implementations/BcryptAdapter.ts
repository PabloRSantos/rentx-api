import { hash } from "bcrypt";

import { IHasher } from "../models";

export class BcryptAdapter implements IHasher {
    hash(value: string, salt: number): Promise<string> {
        return hash(value, salt);
    }
}

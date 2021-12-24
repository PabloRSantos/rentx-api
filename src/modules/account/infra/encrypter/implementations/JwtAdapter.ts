import { sign } from "jsonwebtoken";

import { IEncrypter } from "../models";

export class JwtAdapter implements IEncrypter {
    encrypt(value: string | object, options: IEncrypter.IOptions): string {
        return sign(value, "a7e071b3de48cec1dd24de6cbe6c7bf1", options);
    }
}

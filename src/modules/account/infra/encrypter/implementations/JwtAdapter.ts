import { sign, verify } from "jsonwebtoken";

import { IDecrypter, IEncrypter } from "../models";

export class JwtAdapter implements IEncrypter, IDecrypter {
    private readonly secret = "a7e071b3de48cec1dd24de6cbe6c7bf1";

    decrypt(value: string): IDecrypter.IResponse {
        return verify(value, this.secret) as IDecrypter.IResponse;
    }
    encrypt(value: string | object, options: IEncrypter.IOptions): string {
        return sign(value, this.secret, options);
    }
}

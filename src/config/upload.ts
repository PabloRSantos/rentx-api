import multer, { Multer } from "multer";
import { resolve } from "path";

export class UploadConfig {
    constructor(private readonly folder: string) {}

    upload(): Multer {
        return multer({
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", this.folder),
                filename: (_, file, callback) => {
                    const fileName = `${new Date().getTime()}-${
                        file.originalname
                    }`;

                    return callback(null, fileName);
                },
            }),
        });
    }
}

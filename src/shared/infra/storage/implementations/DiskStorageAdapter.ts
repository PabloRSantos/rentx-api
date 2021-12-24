import fs from "fs";

import { IStorage } from "../models";

export class DiskStorageAdapter implements IStorage {
    async deleteFile(filename: string): Promise<void> {
        try {
            await fs.promises.stat(filename);
        } catch (error) {
            return;
        }
        await fs.promises.unlink(filename);
    }
}

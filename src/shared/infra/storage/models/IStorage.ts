export interface IStorage {
    deleteFile(filename: string): Promise<void>;
}

import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
    host: string;
}

export const makeConnection = async (): Promise<void> => {
    const options = await getConnectionOptions();
    const newOptions = options as IOptions;
    newOptions.host = "database";
    await createConnection({
        ...options,
    });
};

import { Connection, createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
    host: string;
}

export const makeConnection = async (
    host = "database"
): Promise<Connection> => {
    const options = await getConnectionOptions();
    const newOptions = options as IOptions;
    newOptions.host = host;
    return createConnection({
        ...options,
    });
};

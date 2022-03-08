import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import { makeConnection } from "..";

async function create() {
    const connection = await makeConnection("localhost");
    const id = uuidV4();
    const password = await hash("admin", 8);
    await connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
            values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
        `
    );
}

create().then(() => console.log("User admin created!"));

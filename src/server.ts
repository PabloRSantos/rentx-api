import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { makeConnection } from "./database";
import swaggerSetup from "./swagger";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

makeConnection()
    .then(async () => {
        const { router } = await import("./routes");
        app.use(router);
    })
    .catch(console.log);
app.listen(3333);

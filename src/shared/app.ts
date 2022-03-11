import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerSetup from "../swagger";
import { makeConnection } from "./infra/typeorm";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

makeConnection()
    .then(async () => {
        const { router } = await import("./routes");
        app.use(router);
    })
    .catch(console.log);

export { app };

import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerSetup from "./swagger";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use(router);

app.listen(3333);

import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { categoryRoutes } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationsRouter);
router.use("/users", usersRouter);
router.use(authenticateRouter);

export { router };

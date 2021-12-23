import { Router } from "express";

import { categoryRoutes } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationsRouter);

export { router };

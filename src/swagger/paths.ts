import { carsPath, categoriesPath, specificationsPath } from "./paths/";
import { sessionsPath } from "./paths/sessions";

export const paths = {
    "/cars": carsPath,
    "/categories": categoriesPath,
    "/categories/import": categoriesPath.import,
    "/specifications": specificationsPath,
    "/sessions": sessionsPath,
};

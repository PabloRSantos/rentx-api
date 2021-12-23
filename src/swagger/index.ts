import { paths } from "./paths";
import { schemas } from "./schemas";

export default {
    openapi: "3.0.0",
    info: {
        title: "RentalX Documentation",
        description: "This is an API Rent",
        version: "1.0.0",
        contact: {
            email: "pablorsantos15@gmail.com",
        },
    },
    tags: [
        {
            name: "Category",
        },
    ],
    paths,
    schemas,
};

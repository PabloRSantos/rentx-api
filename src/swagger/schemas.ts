import {
    createCategorySchema,
    categorySchema,
    createSpecificationSchema,
} from "./schemas/cars";

export const schemas = {
    createCategory: createCategorySchema,
    category: categorySchema,
    createSpecification: createSpecificationSchema,
};

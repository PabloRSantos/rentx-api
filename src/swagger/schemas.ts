import {
    createCategorySchema,
    categorySchema,
    createSpecificationSchema,
    uploadCategorySchema,
} from "./schemas/cars";

export const schemas = {
    createCategory: createCategorySchema,
    uploadCategory: uploadCategorySchema,
    category: categorySchema,
    createSpecification: createSpecificationSchema,
};

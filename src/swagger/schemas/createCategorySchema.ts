export const createCategorySchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        description: {
            type: "string",
        },
    },
    example: {
        name: "any_category",
        description: "any_description",
    },
};

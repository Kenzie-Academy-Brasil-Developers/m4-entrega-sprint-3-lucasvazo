import database from "../database";
import { createNewCategorySchema } from "../serializers/newCategory.serializers";

export const addCategoriesService = async (payload) => {
    try {
        const validated = await createNewCategorySchema.validate(payload, {
            abortEarly: false,
            stripUnknown: true
        })
        const queryResponse = await database.query(
            `
            INSERT INTO 
                categories(name)
            VALUES
                ($1)
            RETURNING
                *
            `,
            [validated.name]
            );
    
        return [201, {id: queryResponse.rows[0].id, name: queryResponse.rows[0].name }]
    } catch(error) {
        return [400, {message: error.errors[0]}]
    }
}
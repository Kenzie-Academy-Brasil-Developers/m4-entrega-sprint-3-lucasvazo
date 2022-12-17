import database from "../database";
import { createNewCategorySchema } from "../serializers/newCategory.serializers";
import { AppError } from "../errors";

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
    
        return {id: queryResponse.rows[0].id, name: queryResponse.rows[0].name }
    } catch(error) {
        console.log(error.errors[0])
        throw new AppError(error.errors[0], 400)
    }
}
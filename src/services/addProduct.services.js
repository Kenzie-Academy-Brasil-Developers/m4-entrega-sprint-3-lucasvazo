import database from "../database"
import { createNewProductSchema } from "../serializers/newProduct.serializers"
import { AppError } from "../errors";

export const addProductService = async (payload) => {
    try {
        const validated = await createNewProductSchema.validate(payload,{
            abortEarly: false,
            stripUnknown: true
        });
    
        const createdProduct = await database.query(`
            INSERT INTO
                products(name, price, category_id)
            VALUES
                ($1, $2, $3)
            RETURNING
                *;
        `,[validated.name, validated.price, validated.category_id]);

        return createdProduct.rows[0];

    } catch(error) {
        console.log(error.errors[0])
        throw new AppError(error.errors[0], 400)
    }
}
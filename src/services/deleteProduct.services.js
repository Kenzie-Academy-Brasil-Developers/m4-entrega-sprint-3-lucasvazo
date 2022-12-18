import database from "../database"

export const deleteProductService = async (productId) => {
    const deletedProduct = await database.query(`
        DELETE FROM
            products
        WHERE
            products.id = $1
        RETURNING
            *;
    `, [productId]);

    return deletedProduct.rows[0].name;
}
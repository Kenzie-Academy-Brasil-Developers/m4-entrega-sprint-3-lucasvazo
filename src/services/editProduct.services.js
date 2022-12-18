import database from "../database"

export const editProductService = async (productId, newProductName) => {
    const editedProduct = await database.query(
        `
        UPDATE
            products
        SET
            name = $1
        WHERE
            products.id = $2
        RETURNING
            *
        `, [newProductName, productId]
    );
    return { name: editedProduct.rows[0].name }
};
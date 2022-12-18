import database from "../database"

export const listProductsService = async () => {

    const allProducts = await database.query(`
        SELECT
            *
        FROM
            products
    `);

    return allProducts.rows

};
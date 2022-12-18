import database from "../database";

export const listProductsByCategoryService = async (categoryId) => {

    const getAllProducts =  await database.query(`
        SELECT
            products.name,
            products.price,
            categories.name category
        FROM
            products
        JOIN
            categories ON products.category_id = categories.id
        WHERE
        categories.id = $1;
    `,[categoryId])

    return getAllProducts.rows;
}
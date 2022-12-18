import database from "../database";

export const listRequiredProductService = async (payload) => {

    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            products
        WHERE
            products.id = ($1)
        `, [payload]);

    return {name: queryResponse.rows[0].name};
}
import database from "../database";

export const listRequiredCategoryService = async (payload) => {

    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            categories
        WHERE
            categories.id = ($1)
        `, [payload]);

    return {name: queryResponse.rows[0].name};
}
import database from "../database";

export const listCategoriesService = async () => {
    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            categories
        `);

    console.log(queryResponse.rows)

    return [200, queryResponse.rows]
};
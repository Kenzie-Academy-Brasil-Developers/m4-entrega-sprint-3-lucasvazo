import database from "../database";

export const listCategoriesService = async () => {
    const queryResponse = await database.query(
        `
        SELECT
            *
        FROM
            categories
        `);

    return queryResponse.rows;
};
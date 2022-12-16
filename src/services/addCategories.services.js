import database from "../database";

export const addCategoriesService = async (payload) => {
    const queryResponse = await database.query(
        `
        INSERT INTO 
            categories(name)
        VALUES
            ($1)
        RETURNING
            *
        `,
        [payload.name]
        );

    return [201, queryResponse.rows]
}
import database from "../database"

export const deleteCategoryService = async (categoryId) => {
    const deletedCategory = await database.query(`
        DELETE FROM
            categories
        WHERE
            categories.id = $1
        RETURNING
            *;
    `, [categoryId]);

    return deletedCategory.rows[0].name;
}
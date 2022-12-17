import database from "../database"


export const editCategoryService = async (categoryId, newCategoryName) => {
    const editedCategory = await database.query(
        `
        UPDATE
            categories
        SET
            name = $1
        WHERE
            categories.id = $2
        RETURNING
            *
        `, [newCategoryName, categoryId]
    );
    return { name: editedCategory.rows[0].name }
};
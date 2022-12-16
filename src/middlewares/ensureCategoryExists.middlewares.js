import database from "../database";

export const ensureCategoryExistsMiddleware = async (req, res, next) => {
  const categoryId = req.params.id;

  if (!isFinite(categoryId)) {
    return res.status(404).json({ "message" : "Categoria não existente" });
  }

  const checkCategoryExists = await database.query(
    `
        SELECT
            categories.name
        FROM
            categories
        WHERE
            categories.id = ($1)
        `,
    [categoryId]
  );

  if (checkCategoryExists.rows.length < 1) {
    return res.status(404).json({ "message" : "Categoria não existente" });
  }

  return next();
};

import database from "../database";

export const ensureNewCategory = async (req, res, next) => {
  const categoryName = req.body.name;

  const checkCategoryExists = await database.query(
    `
        SELECT
            categories.name
        FROM
            categories
        WHERE
            categories.name = ($1)
        `,
    [categoryName]
  );

  if (checkCategoryExists.rows.length > 0) {
    return res.status(400).json({ message: "Categoria já existente." });
  }

  return next();
};

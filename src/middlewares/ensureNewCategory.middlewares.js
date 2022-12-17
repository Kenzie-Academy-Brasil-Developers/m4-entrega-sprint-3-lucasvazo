import database from "../database";
import { AppError } from "../errors";

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
    throw new AppError("Categoria já existente.", 400)
  }

  return next();
};

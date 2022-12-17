import database from "../database";
import { AppError } from "../errors";

export const ensureCategoryExistsMiddleware = async (req, res, next) => {
  const categoryId = req.params.id;

  if (!isFinite(categoryId)) {
    throw new AppError("Categoria não existente", 404)
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
    throw new AppError("Categoria não existente", 404)
  }

  return next();
};

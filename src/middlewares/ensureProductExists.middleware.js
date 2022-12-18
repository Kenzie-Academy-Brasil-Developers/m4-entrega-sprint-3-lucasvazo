import database from "../database";
import { AppError } from "../errors";

export const ensureProductExistsMiddleware = async (req, res, next) => {
    try {
        const productId = req.params.id;
    
        const checkProductExists = await database.query(
            `
            SELECT
                products.name
            FROM
                products
            WHERE
                products.id = $1
            `,
            [productId]
        );

        if (checkProductExists.rows.length < 1) {
            throw new AppError("Produto não existente", 404)
         }
  
        return next();

    } catch (error) {

      throw new AppError("Produto não existente", 404)

    }
    
  };
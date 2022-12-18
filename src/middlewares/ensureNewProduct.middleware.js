import database from "../database";
import { AppError } from "../errors";

export const ensureNewProduct = async (req, res, next) => {

    const productName = req.body.name;

    if (!productName) {
        throw new AppError('Name is a required field', 400)
    }

    const checkProductExists = await database.query(
        `
        SELECT
            *
        FROM
            products
        WHERE
            LOWER(products.name) = $1;
        `,
    [productName.toLowerCase().trim()]
    );

    if (checkProductExists.rows.length > 0) {
        throw new AppError("Produto já existente", 400)
    }

    return next();
}
import { listProductsService } from "../services/listProducts.services";

export const listProductsController = async (req, res) => {
    const listProducts = await listProductsService();
    return res.status(200).json(listProducts);
}
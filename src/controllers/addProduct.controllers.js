import { addProductService } from "../services/addProduct.services"

export const addProductController = async (req, res) => {
    const responseBody = await addProductService(req.body);
    return res.status(201).json(responseBody);
}
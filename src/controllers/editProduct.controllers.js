import { editProductService } from "../services/editProduct.services";

export const editProductController = async (req, res) => {
    const responseBody = await editProductService(req.params.id, req.body.name)
    return res.status(200).json(responseBody);
}
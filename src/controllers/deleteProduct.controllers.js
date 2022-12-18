import { deleteProductService } from "../services/deleteProduct.services";

export const deleteProductController = async (req, res) => {
    const responseBody = await deleteProductService(req.params.id)
    return res.status(204).json({"deleted" : responseBody});
}
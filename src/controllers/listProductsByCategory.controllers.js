import { listProductsByCategoryService } from "../services/listProductsByCategory.services";

export const listProductsByCategoryController = async (req, res) => {
    const responseBody = await listProductsByCategoryService(req.params.id);
    return res.status(200).json(responseBody);
}
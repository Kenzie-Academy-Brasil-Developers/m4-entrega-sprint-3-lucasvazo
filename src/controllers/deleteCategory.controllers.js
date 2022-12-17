import { deleteCategoryService } from "../services/deleteCategory.services";

export const deleteCategoryController = async (req, res) => {
    const responseBody = await deleteCategoryService(req.params.id)
    return res.status(204).json({"deleted" : responseBody});
}
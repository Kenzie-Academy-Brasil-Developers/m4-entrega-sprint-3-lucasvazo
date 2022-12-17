import { editCategoryService } from "../services/editCategory.services"

export const editCategoryController = async (req, res) => {
    const responseBody = await editCategoryService(req.params.id, req.body.name)
    return res.status(200).json(responseBody);
}
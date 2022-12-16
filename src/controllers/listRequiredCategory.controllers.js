import { listRequiredCategoryService } from "../services/listRequiredCaterogy.services";

export const listRequiredCategoryController = async (req, res) => {
    const categoryId = req.params.id;
    const [ responseStatus, responseBody ] = await listRequiredCategoryService(categoryId)
    return res.status(responseStatus).json(responseBody)
}
import { listRequiredCategoryService } from "../services/listRequiredCaterogy.services";

export const listRequiredCategoryController = async (req, res) => {
    const responseBody = await listRequiredCategoryService(req.params.id);
    return res.status(200).json(responseBody);
}
import { addCategoriesService } from "../services/addCategories.services";

export const addCategoriesController = async (req, res) => {
    const [ responseStatus, responseBody ] = await addCategoriesService(req.body);
    return res.status(responseStatus).json(responseBody)
}
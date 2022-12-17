import { addCategoriesService } from "../services/addCategories.services";

export const addCategoriesController = async (req, res) => {
    const responseBody  = await addCategoriesService(req.body);
    return res.status(201).json(responseBody);
}
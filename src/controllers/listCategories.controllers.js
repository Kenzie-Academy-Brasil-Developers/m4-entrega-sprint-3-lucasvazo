import { listCategoriesService } from "../services/listCategories.services"

export const listCategoriesController = async (req, res) => {
    const responseBody = await listCategoriesService();
    return res.status(200).json(responseBody);
}


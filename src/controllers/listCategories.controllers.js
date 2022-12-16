import { listCategoriesService } from "../services/listCategories.services"

export const listCategoriesController = async (req, res) => {
    const [ responseStatus, responseBody ] = await listCategoriesService()
    return res.status(responseStatus).json(responseBody)
}


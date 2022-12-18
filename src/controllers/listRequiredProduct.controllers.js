import { listRequiredProductService } from "../services/listRequiredProduct.services";

export const listRequiredProductController = async (req, res) => {
    const responseBody = await listRequiredProductService(req.params.id);
    return res.status(200).json(responseBody);
}
import { Router } from "express";
import { listCategoriesController } from "../controllers/listCategories.controllers";

const categoriesRouter = Router()

categoriesRouter.get('', listCategoriesController)

export default categoriesRouter;
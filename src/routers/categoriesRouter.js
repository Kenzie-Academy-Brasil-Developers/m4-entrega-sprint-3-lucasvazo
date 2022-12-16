import { Router } from "express";
import { listCategoriesController } from "../controllers/listCategories.controllers";
import { addCategoriesController } from "../controllers/addCategories.controllers";

const categoriesRouter = Router()

categoriesRouter.get('', listCategoriesController)
categoriesRouter.post('', addCategoriesController)

export default categoriesRouter;
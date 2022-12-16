import { Router } from "express";
import { listCategoriesController } from "../controllers/listCategories.controllers";
import { addCategoriesController } from "../controllers/addCategories.controllers";
import { ensureNewCategory } from "../middlewares/ensureNewCategory.middlewares";

const categoriesRouter = Router()

categoriesRouter.get('', listCategoriesController)
categoriesRouter.post('', ensureNewCategory, addCategoriesController)

export default categoriesRouter;
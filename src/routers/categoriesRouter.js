import { Router } from "express";
import { listCategoriesController } from "../controllers/listCategories.controllers";
import { addCategoriesController } from "../controllers/addCategories.controllers";
import { ensureNewCategory } from "../middlewares/ensureNewCategory.middlewares";
import { listRequiredCategoryController } from "../controllers/listRequiredCategory.controllers";
import { ensureCategoryExistsMiddleware } from "../middlewares/ensureCategoryExists.middlewares";


const categoriesRouter = Router()

categoriesRouter.get('', listCategoriesController);
categoriesRouter.post('', ensureNewCategory, addCategoriesController);
categoriesRouter.get('/:id', ensureCategoryExistsMiddleware, listRequiredCategoryController )

export default categoriesRouter;
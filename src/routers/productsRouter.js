import { Router } from "express";
import { addProductController } from "../controllers/addProduct.controllers";
import { deleteProductController } from "../controllers/deleteProduct.controllers";
import { editProductController } from "../controllers/editProduct.controllers";
import { listProductsController } from "../controllers/listProducts.controllers";
import { listProductsByCategoryController } from "../controllers/listProductsByCategory.controllers";
import { listRequiredProductController } from "../controllers/listRequiredProduct.controllers";
import { ensureCategoryExistsMiddleware } from "../middlewares/ensureCategoryExists.middlewares";
import { ensureNewProduct } from "../middlewares/ensureNewProduct.middleware";
import { ensureProductExistsMiddleware } from "../middlewares/ensureProductExists.middleware";

const productsRouter = Router();

productsRouter.post('', ensureNewProduct, addProductController);
productsRouter.get('', listProductsController);
productsRouter.get('/:id', ensureProductExistsMiddleware, listRequiredProductController)
productsRouter.delete('/:id', ensureProductExistsMiddleware, deleteProductController)
productsRouter.patch('/:id', ensureProductExistsMiddleware, editProductController )
productsRouter.get('/category/:id', ensureCategoryExistsMiddleware, listProductsByCategoryController)

export default productsRouter;
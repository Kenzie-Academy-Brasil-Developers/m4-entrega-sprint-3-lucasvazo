import { Router } from "express";
import { addProductController } from "../controllers/addProduct.controllers";
import { deleteProductController } from "../controllers/deleteProduct.controllers";
import { listProductsController } from "../controllers/listProducts.controllers";
import { listRequiredProductController } from "../controllers/listRequiredProduct.controllers";
import { ensureNewProduct } from "../middlewares/ensureNewProduct.middleware";
import { ensureProductExistsMiddleware } from "../middlewares/ensureProductExists.middleware";

const productsRouter = Router();

productsRouter.post('', ensureNewProduct, addProductController);
productsRouter.get('', listProductsController);
productsRouter.get('/:id', ensureProductExistsMiddleware, listRequiredProductController)
productsRouter.delete('/:id', ensureProductExistsMiddleware, deleteProductController )

export default productsRouter;
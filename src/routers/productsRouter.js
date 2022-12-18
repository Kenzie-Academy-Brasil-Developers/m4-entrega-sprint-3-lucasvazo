import { Router } from "express";
import { addProductController } from "../controllers/addProduct.controllers";
import { listProductsController } from "../controllers/listProducts.controllers";
import { ensureNewProduct } from "../middlewares/ensureNewProduct.middleware";

const productsRouter = Router();

productsRouter.post('', ensureNewProduct, addProductController);
productsRouter.get('', listProductsController);

export default productsRouter;
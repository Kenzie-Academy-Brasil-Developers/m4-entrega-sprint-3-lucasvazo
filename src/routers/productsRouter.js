import { Router } from "express";
import { addProductController } from "../controllers/addProduct.controllers";
import { ensureNewProduct } from "../middlewares/ensureNewProduct.middleware";

const productsRouter = Router();

productsRouter.post('', ensureNewProduct, addProductController);
productsRouter.get('',);

export default productsRouter;
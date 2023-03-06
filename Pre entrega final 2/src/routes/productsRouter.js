import { Router } from "express";
import {getProducts , addProduct , getProdudtById} from "../controllers/productControllers.js"

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:pid' , getProdudtById )

productsRouter.post('/', addProduct);

export default productsRouter;
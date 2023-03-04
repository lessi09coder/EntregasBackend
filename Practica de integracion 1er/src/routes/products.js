import { Router } from "express";
import {getProducts , createProduct} from "../controllers/productControllers.js";

const productRouter = Router();

productRouter.get('/', getProducts);

productRouter.post('/', createProduct);

export default productRouter;
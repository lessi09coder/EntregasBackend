import { Router } from "express";
import { getCarts , createCart, addProductCart ,productInCart} from "../controllers/cartControllers.js";

const cartsRouter = Router();

cartsRouter.get('/', getCarts)
cartsRouter.post('/', createCart)
cartsRouter.post('/:cid/product/:pid', addProductCart)
cartsRouter.get('/:cid', productInCart)

export default cartsRouter;
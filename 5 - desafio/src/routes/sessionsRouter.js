import { Router } from "express";
import { getSessionLogout, getSessionLogin , auth, getPrivate } from "../controllers/sessionsControllers.js";


const sesionsRouter = Router();

//si usamos el sessionsRouter.use(auth), todos los endpoints pediran que tengamos autorizacion
sesionsRouter.post('/user', getSessionLogin)
sesionsRouter.get('/logout', getSessionLogout )
sesionsRouter.get('/admin', auth, getPrivate)

export default sesionsRouter
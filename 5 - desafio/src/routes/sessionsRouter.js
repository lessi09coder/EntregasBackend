import { Router } from "express";
import { getSessionLogout, getSessionLogin , auth, getPrivate } from "../controllers/sessionsControllers.js";


const sesionsRouter = Router();


sesionsRouter.post('/user', getSessionLogin)
sesionsRouter.get('/logout', getSessionLogout )
sesionsRouter.get('/admin', auth, getPrivate)

export default sesionsRouter
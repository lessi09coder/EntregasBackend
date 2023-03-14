import { Router } from "express";
import { getSessionLogout, getSessionLogin } from "../controllers/sessionsControllers.js";


const sesionsRouter = Router();


sesionsRouter.post('/user', getSessionLogin)
sesionsRouter.get('/logout', getSessionLogout )


export default sesionsRouter
import { Router } from "express";
import { getCookies, createCookies, getCookiesSigned, getCookiesJson, getCookiesDelete } from "../controllers/cookiesControllers.js";

const cookiesRouter = Router();


cookiesRouter.get('/get-cookie', getCookies)
cookiesRouter.get('/signed', getCookiesSigned)
cookiesRouter.get('/json', getCookiesJson)
cookiesRouter.get('/delete', getCookiesDelete)

cookiesRouter.post('/create-cookie', createCookies)


export default cookiesRouter
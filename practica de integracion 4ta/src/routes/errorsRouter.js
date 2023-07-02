const { Router } = require("express");
const { getErrorsProducts, postErrorsProducts } = require('../controllers/errorsControllers.js')

const errorsRouter = Router()

errorsRouter.get('/', getErrorsProducts);

errorsRouter.post('/', postErrorsProducts);


module.exports = errorsRouter
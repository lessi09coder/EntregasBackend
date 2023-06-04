const { Router } = require("express");

const loggerRouter = Router();

loggerRouter.get('/', (req, res) => {
    req.logger.debug('Este es verbose')
    req.logger.info('Ingreso en la ruta raiz')
    req.logger.warning('Este es un warn') 
    res.send({ message: "Prueba de logger" })
});

module.exports =  loggerRouter 
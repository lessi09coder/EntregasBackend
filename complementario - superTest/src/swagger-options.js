const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentacion de nuestra app",
            description: "Descripcion para nuestra API"
        }
    },
    apis: ['src/docs/**/*.yaml']
}


module.exports = swaggerOptions;
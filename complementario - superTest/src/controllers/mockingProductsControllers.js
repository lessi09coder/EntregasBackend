const { generateManyProducts } = require("../mocks/generateProducts.js");
const CustomError = require('../services/errors/CustomError.js')
const EErrors = require('../services/errors/enumsErrors.js');
const generateProductErrorInfo = require('../services/errors/infoErrors.js')

const postProductsMock = (req, res) => {
    let ejemplo = 100;    

    const productoFailed = [
        {
            _id: 'd944b76a-7a06-419b-8227-d5febe7adb8f',
            title: undefined,
            description: 'Dolores doloremque recusandae quaerat odio iste.',
            price: 1768,
            status: true,
            stock: 12221,
            category: 'Shoes',
            thumbnail: 'https://loremflickr.com/640/480'
        },
        {
            _id: 'd944b76a-7a06-419b-8227-d5febe7adb8f',
            title: "ahaosaf",
            description: 'Dolores doloremque recusandae quaerat odio iste.',
            price: undefined,
            status: true,
            stock: 12221,
            category: 'Shoes',
            thumbnail: 'https://loremflickr.com/640/480'
        }
    ];

    //const productMock = generateManyProducts(ejemplo)
    const productMock = productoFailed
   
    const successCant = 0;

    const errorsMap = productMock.map((a) => {

        if (!a.title || !a.price) {

            CustomError.createError({
                name: "Product Creation error",
                cause: generateProductErrorInfo(a),
                message: "Error trying to create product",
                code: EErrors.EMPTY_FIELD_ERROR
            })

           

            /* CustomError.createError({
                name: "ProductCreationError",
                cause: "Causa del error",
                message: "Error al intentar crear el producto",
                code: 123
              }); */
              
        } else {
            //esto no se si esta bien codeado
            successCant += 1

            res.send({ status: "success", payload: successCant })
        }

    });
    console.log(errorsMap)


    res.send({ status: "success", payload: errorsMap })

};

const getProductsMock = (req, res) => {
    res.send({ status: "success", payload: "hola" })
}

module.exports = { getProductsMock, postProductsMock }
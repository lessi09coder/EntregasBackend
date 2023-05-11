const { generateManyProducts } = require("../mocks/generateProducts.js");
const CustomError = require('../services/errors/CustomError.js')
const EErrors = require('../services/errors/enumsErrors.js');
const { generateProductErrorInfo } = require('../services/errors/infoErrors.js')




const getProductsMock = async (req, res) => {
    let ejemplo = 3;
    const productMock = generateManyProducts(ejemplo)
    console.log(productMock)
    const errors = productMock.map((a) => {
        if(!a.title){
            //corregir esto
            return generateProductErrorInfo(a)
        } else {
            return {status: "success"}
        }
    })
    console.log(errors)


    res.send({ status: 'success', payload: "todavia nada" })
};

module.exports = { getProductsMock }
const { generateManyProducts } = require("../mocks/generateProducts.js");
const CustomError = require('../services/errors/CustomError.js')
const EErrors = require('../services/errors/enumsErrors.js');
const  generateProductErrorInfo  = require('../services/errors/infoErrors.js')


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
]




const getProductsMock = async (req, res) => {
    let ejemplo = 100;
    //const productMock = generateManyProducts(ejemplo)
    const productMock= productoFailed
    console.log(productMock)
    let successCant = 0;
    const errors = productMock.map((a) => {
        

        if(!a.title || !a.category ){
            //corregir esto
            return generateProductErrorInfo(a)
        } else {
           
            successCant += 1               
            
        }
        
    })
    
    console.log(errors)


    res.send({ status: 'success', ProductOk:successCant  })
};

module.exports = { getProductsMock }
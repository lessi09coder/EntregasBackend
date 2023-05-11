const CustomError = require('../services/errors/CustomError.js')

const getErrorsProducts = async (req, res) => {
    let errors =

    res.send({ status: 'success', payload: errors })
};

const postErrorsProducts = async (req, res) => {
    
};


module.exports = { getErrorsProducts, postErrorsProducts }
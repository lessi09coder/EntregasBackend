// esto no va por el momento

const getErrorsProducts = async (req, res) => {
    let errors = {}

    res.send({ status: 'success', payload: errors })
};

const postErrorsProducts = async (req, res) => {
    const products = req.body
    console.log(products)
};


module.exports = { getErrorsProducts, postErrorsProducts }
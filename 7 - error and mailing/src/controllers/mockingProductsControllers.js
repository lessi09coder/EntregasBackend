const { generateManyProducts } = require("../mocks/generateProducts.js")

const getProductsMock = async (req, res) => {
    let ejemplo = 3;
    let product = generateManyProducts(ejemplo)
    res.send({ status: 'success', payload: product })
};

module.exports = { getProductsMock }
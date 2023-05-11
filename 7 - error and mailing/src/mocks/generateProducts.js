const {faker} = require('@faker-js/faker') 

const generateManyProducts = cant => {
    const products = [];
    for (let i = 0; i < cant; i++) {
        products.push(generateProduct())
    }
    return products
}

const generateProduct = () => {
    return {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: Number(faker.commerce.price(1000,2000,0)),
        status: true,
        stock: faker.datatype.number(),
        category: faker.commerce.department(),        
        thumbnail: faker.image.imageUrl(),
    }
}

module.exports = {generateManyProducts}
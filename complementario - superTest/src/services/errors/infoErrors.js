const generateProductErrorInfo = (product) => {
    return ` One or more properties were incomplete or not valid.
    List of required properties:
    * ID : need to be a String, received: ${product._id} *
    * TITLE : need to be a String, received: ${product.title} *
    * DESCRIPTION : need to be a String, received: ${product.description} *
    * PRICE : need to be a Number, received: ${product.price} *
    * STATUS : need to be a String, received: ${product.status} *
    * STOCK : need to be a String, received: ${product.stock} *
    * CATEGORY : need to be a String, received: ${product.category} *
    * THUMBNAIL : need to be a String, received: ${product.thumbnail} *
    `
}


module.exports = generateProductErrorInfo
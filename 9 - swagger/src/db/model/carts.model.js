const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    products: [{
        _id: false,
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: 'products'
        },
        qt: { 
            type: Number,
            default: 1 
        }
    }]
});

const CartModel = mongoose.model('carts', cartSchema);

module.exports = CartModel
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = mongoose.Schema({
    title: {type: String, require: [true, "El campo description es requerido"] },
    description: { type: String, required: [true, "El campo description es requerido"] },    
    price: { type: Number, required: [true, "El campo price es requerido"] },
    status: { type: Boolean, default: true},
    stock: { type: Number, required: [true, "El campo stock es requerido"] },
    category: { type: String, required: [true, "El campo category es requerido"] },
    thumbnail: { type: String, required: [true, "El campo thambail es requerido"] },
});
productSchema.plugin(mongoosePaginate)

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
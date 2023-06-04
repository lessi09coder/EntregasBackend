class ProductDTO {
    constructor(_id, title, description, price, status, stock, category, thumbnail) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.status = status;
        this.stock = stock;
        this.category = category;
        this.thumbnail = thumbnail;
    }
}
module.exports = ProductDTO;
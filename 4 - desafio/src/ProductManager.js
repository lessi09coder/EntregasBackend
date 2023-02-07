const fs = require('fs')

class ProductManager {

    constructor() {
        this.products = [];
        this.path = './products.JSON'
    }

    //metodos:

    incrementalId(){        
        let products = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        let idProduct = products[products.length - 1].id
        return idProduct + 1 
    }
    addProduct(oneAddProduct) {
        //let idd = this.products.length
        let products = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        console.log(oneAddProduct)

        if (products.find((e) => e.code == oneAddProduct.code)) {            
            return "EXISTE";
        } else if (oneAddProduct.title && oneAddProduct.description &&  oneAddProduct.price ) {
            const newProduct = {
                title: oneAddProduct.title,
                description: oneAddProduct.description,
                price: oneAddProduct.price,
                thumbnail: oneAddProduct.thumbnail,   
                status: true,
                id:this.incrementalId(),
                //id: products.length
            }
            
            console.log(newProduct)

            products.push(newProduct)
            fs.writeFileSync(this.path, JSON.stringify(products))
        }

    };

    getProducts() {
        //let productsList = this.products.slice(); 
        return JSON.parse(fs.readFileSync('./products.JSON', 'utf-8'));
    };

    getProductById(id) {
        let listParse = JSON.parse(fs.readFileSync('./products.JSON', 'utf-8'));
        let existID = listParse.find(e => e.id == id);
        if (existID) {
            return existID
        } else return "product not found"
    };

    updateProduct(idActualizar, productActualizar) {
        //no debe borrarse su ID
        const productUpdate = this.getProducts();
        const idProductUpdate = productUpdate.findIndex((e => e.id === idActualizar));

        productActualizar.id = idActualizar;;
        productUpdate.splice(idProductUpdate, 1, productActualizar);
        fs.writeFileSync('./products.JSON', JSON.stringify(productUpdate));
    }

    deleteProduct(idBorrar) {
        //borra el producto
        let productDelete = JSON.parse(fs.readFileSync('./products.JSON', 'utf-8'));
        productDelete.splice(idBorrar, 1);
        console.log(productDelete);
        fs.writeFileSync(this.path, JSON.stringify(productDelete));
        //return productDelete
    }

}

module.exports = ProductManager;




// ****  empezamos a crear productos:   ****
//const productos = new ProductManager()


//productos.addProduct('Rayo', 'Zapatilla Deportiva', 12000, 'https://www.shutterstock.com/image-photo/man-tying-jogging-shoes-600w-381415150.jpg', 88, 10);
//productos.addProduct('Red', 'Zapato rojo', 8000, 'https://www.shutterstock.com/image-photo/closeup-red-sneakers-on-bright-600w-1796287516.jpg', 56, 6);
//productos.addProduct('Blue', 'Zapato azul', 9000, 'soy una miniatura', 51, 10);
//productos.addProduct('EL REPETIDO TEST', 'agsasga', 9000, 'soy una miniatura', 56, 10);
//productos.addProduct('FALTA EL CAMPO', 9000, 'soy una miniatura', 56, 10);

//  **** Mostrar los productos:  ****

//productos.getProducts();


//  **** Buscas un producto especifico por ID: ****

//productos.getProductById(2);

//ESTE ID NO EXISTE
//productos.getProductById(12412);

//  **** cambiar un campo a eleccion, pero no el ID  ****

//updateProduct(idActualizar, campoActualizar , actualizacion)
//productos.updateProduct(2, "price", "9999");
//productos.updateProduct(2, "id", 1254);

//  **** Borrar un producto  ****

//productos.deleteProduct(idBorrar)
//productos.deleteProduct(2)



//export default getProductById
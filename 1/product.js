class ProductManager {


    constructor() {

        this.products = [];

    }


    //metodos:

    addProduct(title, description, price, thumbnail, code, stock, id = 0) {

        let idd = this.products.length

        if (arguments.length < 6) {
            return console.log("falta un campo para agregar el producto \n")
        }

        if (this.products.length == 0) {
            this.products.push({
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: id
            })

            //console.log(Object.keys(this.products[0]))

        } else {

            if (this.products.find((e) => e.code == code)) {
                console.log(`esta repetido el producto: ${title} \n`);
            } else {

                console.log(`como no esta repetido, agregamos : ${title} \n`)
                this.products.push({
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: idd
                })
            }
        }
    };


    getProducts() {
        let productsList = this.products.slice();
        console.log(productsList)
    };

    getProductById(id) {
        let existID = this.products.find(e => e.id === id)
        if (existID == undefined) {
            console.log("not found \n")
        } else console.log(existID)
    };

}

// ****  empezamos a crear productos:   ****


const productos = new ProductManager()


productos.addProduct('Rayo', 'Zapatilla Deportiva', 12000,'https://www.shutterstock.com/image-photo/man-tying-jogging-shoes-600w-381415150.jpg', 88, 10);
productos.addProduct('Red', 'Zapato rojo', 8000, 'https://www.shutterstock.com/image-photo/closeup-red-sneakers-on-bright-600w-1796287516.jpg', 56, 6);
productos.addProduct('Blue', 'Zapato azul', 9000, 'soy una miniatura', 51, 10);
productos.addProduct('EL REPETIDO TEST', 'agsasga', 9000, 'soy una miniatura', 56, 10);
productos.addProduct('FALTA EL CAMPO',  9000, 'soy una miniatura', 56, 10);

//  **** Mostrar los productos:  ****

productos.getProducts();


//  **** Buscas un producto especifico por ID: ****

productos.getProductById(2);

//ESTE ID NO EXISTE
productos.getProductById(12412);


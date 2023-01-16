const fs = require('fs')

class ProductManager {


    constructor() {

        this.products = [];
        this.path = './products.JSON'

    }


    //metodos:

    addProduct(title, description, price, thumbnail, code, stock, id = 0) {

        let idd = this.products.length

        if (arguments.length < 6) {
            return console.log("falta un campo para agregar el producto \n")
        }

        try {

            this.products = JSON.parse(fs.readFileSync(this.path, 'utf-8'))

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
                    id: idd,
                })

                fs.writeFileSync(this.path, JSON.stringify(this.products))

            }


        }
        catch {
            //crea el array vacio
            this.products.push({
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,
                id: id,

            })
            console.log(this.products)
            console.log(JSON.stringify(this.products))
            fs.writeFileSync(this.path, JSON.stringify(this.products))

        }

    };


    getProducts() {
        //let productsList = this.products.slice();   

        console.log(JSON.parse(fs.readFileSync('./products.JSON', 'utf-8')));

    };

    getProductById(id) {
        let listParse = JSON.parse(fs.readFileSync('./products.JSON', 'utf-8'));
        let existID = listParse.find(e => e.id === id);
        if (existID == undefined) {
            console.log("not found \n")
        } else console.log(existID)
    };

    updateProduct(idActualizar, campoActualizar, actualizacion) {
        //no debe borrarse su ID
        if (campoActualizar == ["price" || "title" || "descripcion" || "thumbnail" || "code" || "stock"]) {

            console.log("soy un campo valido")

            let list = JSON.parse(fs.readFileSync('./products.JSON', 'utf-8'));
            
            let existID = list.find(e => e.id === idActualizar)
            if (existID !== undefined) {
                existID[campoActualizar] = actualizacion                
                this.products.splice(idActualizar, 1, existID)
                console.log(this.products)
                fs.writeFileSync(this.path, JSON.stringify(this.products))
            }

        } else if (campoActualizar == "id") { console.log("no se puede cambiar el campo ID") }
        else { console.log("no soy un campo") }

    }

    deleteProduct(idBorrar) {
        //borra el producto
        let productDelete = JSON.parse(fs.readFileSync('./products.JSON', 'utf-8'));
        //console.log(productDelete)
                            
        productDelete.splice(idBorrar, 1)
        console.log(productDelete)
        fs.writeFileSync(this.path, JSON.stringify(productDelete))
        
    }

    deleteAllProduct(idBorrar) {
        //borra TODOS los productos
    }
}






// ****  empezamos a crear productos:   ****


const productos = new ProductManager()


productos.addProduct('Rayo', 'Zapatilla Deportiva', 12000, 'https://www.shutterstock.com/image-photo/man-tying-jogging-shoes-600w-381415150.jpg', 88, 10);
productos.addProduct('Red', 'Zapato rojo', 8000, 'https://www.shutterstock.com/image-photo/closeup-red-sneakers-on-bright-600w-1796287516.jpg', 56, 6);
productos.addProduct('Blue', 'Zapato azul', 9000, 'soy una miniatura', 51, 10);
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
productos.deleteProduct(2)
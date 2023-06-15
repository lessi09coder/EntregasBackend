const chai = require('chai');
const supertest = require('supertest');

const expect = chai.expect;
const requester = supertest('http://localhost:8080')

describe('Testing Zapacool', () => {
    describe('Test de zapatos', () => {
        it('El endpoint POST /api/products debe CREAR un producto', async () => {
            const productMock = {
                title: "Rayo",
                description: "Zapatilla Deportiva",
                price: 12000,
                thumbnail: "https://www.shutterstock.com/image-photo/man-tying-jogging-shoes-600w-381415150.jpg",
                code: 88,
                stock: 10,
            }

            const {
                statusCode,
                ok,
                _body
            } = await requester.post('/api/products').send(productMock)

            console.log(_body)

            expect(_body.payload).to.have.property('_id')
        })

        it('El endpoint GET /api/products debe traer a los productos', async () => {
            const {
                statusCode,
                ok,
                _body
            } = await requester.get('/api/products')

            console.log(statusCode)
        })
    })
})  

/* 
// Ejemplo de prueba con Chai y Supertest
describe('Ejemplo de prueba de API', () => {
    it('debería devolver un código de estado 200', (done) => {
        requester.get('/endpoint')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('debería devolver un objeto con una propiedad "mensaje" igual a "Hola"', (done) => {
        requester.get('/endpoint')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('mensaje', 'Hola');
                done();
            });
    });
}); */
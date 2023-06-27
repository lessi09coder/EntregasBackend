const chai = require('chai');
const supertest = require('supertest');
const assert = chai.assert;
const expect = chai.expect;
const requester = supertest.agent('http://localhost:8080') //http://localhost:8080/api/products

let idProductTest 

describe('Testing Zapacool', () => {
    describe('Test de zapatos', () => {

        it('El endpoint POST /api/products debe CREAR un producto', async () => {
            
            let productMock = {
                title: "supertest title",
                description: "supertest descrip",
                price: 100,
                stock: 10,
                category: "supertest category",
                thumbnail: "testthum",
            };
            const res = await requester.post('/api/products').send(productMock).expect(200)
            assert.isObject(res.body.data, 'It is not an object');
            idProductTest = res.body.data._id
            console.log(idProductTest)
            expect(res.body.data).to.have.property('_id');
        })

        it('El endpoint PUT /api/products/:pid debe modificar un producto por su id.', async () => {

            let productMockPut = {
                title: "supertest title put 1243",
                description: "supertest descrip put",
                price: 200,
                stock: 5,
                category: "supertest category",
                thumbnail: "testthum",
            };
            const res = await requester.put(`/api/products/${idProductTest}`).send(productMockPut).expect(200);
            expect(res.body.data.title).to.equal(productMockPut.title);
        })

        it('El endpoint DELETE /api/products/:pid debe borrar un producto por su id.', async () => {
            const res = await requester.delete(`/api/products/delete/${idProductTest}`).expect(200)
            expect(res.body.payload).to.equal(`el producto ${res.body.data.title} fue eliminado.`);
        })
    })
});

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
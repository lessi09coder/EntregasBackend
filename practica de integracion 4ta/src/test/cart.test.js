const chai = require('chai');
const supertest = require('supertest');
const assert = chai.assert;
const expect = chai.expect;
const requester = supertest.agent('http://localhost:8080') //http://localhost:8080/api/cart

let idCartTest
let idProductTest
let idUserTest
//   /api/cart


before(async () => {

    let productMock = {
        title: "supertest title cart test",
        description: "supertest descrip",
        price: 100,
        stock: 10,
        category: "supertest category",
        thumbnail: "testthum"
    };
    const resProductTestCreate = await requester.post('/api/products').send(productMock).expect(200)
    assert.isObject(resProductTestCreate.body.data, 'It is not an object');
    idProductTest = resProductTestCreate.body.data._id
    expect(resProductTestCreate.body.data).to.have.property('_id');

    let userMock = {
        user: "testUser cartTest",
        email: "testemail@gmail.com",
        password: "123"
    };
    const resUserTestCreate = await requester.post('/api/users/register').send(userMock).expect(200)
    assert.isObject(resUserTestCreate.body.data, 'It is not an object');
    idUserTest = resUserTestCreate.body.data._id
    idCartTest = resUserTestCreate.body.data.idCart
    expect(resUserTestCreate.body.data).to.have.property('_id');
});

describe('Testing Zapacool', () => {
    describe('Test de Cart', () => {

        it('El endpoint POST /api/cart debe AGREGAR un producto al carrito', async () => {
            const resAddProductInCartTest = await requester.post(`/api/cart/${idCartTest}/product/${idProductTest}`).send().expect(200);
            expect(resAddProductInCartTest.body.status).to.equal("success");
        })
    })
}).afterAll(async () => {
    const res = await requester.delete(`/api/products/delete/${idProductTest}`).expect(200)
    expect(res.body.payload).to.equal(`el producto ${res.body.data.title} fue eliminado.`);

    const resUserTest = await requester.delete(`/api/users/delete/${idUserTest}`).expect(200)
    expect(resUserTest._body.status).to.equal("success");
})
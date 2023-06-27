const chai = require('chai');
const supertest = require('supertest');
const assert = chai.assert;
const expect = chai.expect;
const requester = supertest.agent('http://localhost:8080') //http://localhost:8080/api/session

let idUserTest 

describe('Testing Zapacool', () => {
    describe('Test de Users', () => {
        
         it('El endpoint POST /api/session/register debe CREAR un usuario', async () => {
            let userMock = {
                user: "testUser",
                email: "testemail@gmail.com",
                password: "123"
            };
            const res = await requester.post('/api/session/register').send(userMock).expect(200)
            assert.isObject(res.body.data, 'It is not an object');
            idUserTest = res.body.data._id
            expect(res.body.data).to.have.property('_id');
        })  

        it('El endpoint POST /api/session/userPost debe logger un usuario.', async () => {

            let userMockLogger = {
                user: "testUser",                
                password: "123"
            };
            const res = await requester.post(`/api/session/userPost`).send(userMockLogger).expect(200);
            assert.isObject(res.body.data, 'It is not an object');
            expect(res.body.data.user).to.equal(userMockLogger.user);
        }) 
        

        // /api/session/delete/:uid
         it('El endpoint DELETE /api/session/:pid debe borrar un user por su id.', async () => {
            const res = await requester.delete(`/api/session/delete/${idUserTest}`).expect(200)            
            expect(res._body.status).to.equal("success");
        })   
    })
});
const request = require('supertest');
const app = require('../../server');

describe('Testes de Integração', ()=>{
    it('Testa Inserir Postagem',async ()=>{   

         const resposta = await request(app).get('/');
        
        expect(resposta.body).toHaveProperty('texto');
    })
})

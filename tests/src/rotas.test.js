const request = require('supertest');
const app = require('../../server');


describe('Testes de Integração', ()=>{
    test('Testa Inserir Postagem',async ()=>{   

        let ts = Date.now();

        let obj_data = new Date(ts);
        let dia = obj_data.getDate();
        let mes = obj_data.getMonth() + 1;
        let ano = obj_data.getFullYear();
        
        let dataString = dia + '##/##' + mes + '##/##' + ano;

         const resposta = await request(app)
                    .post("/post")
                    .send({"texto":"Olá Mundo!","data":dataString})
                    
                    
                    expect(resposta.statusCode).toBe(200);
                        
    

    })

    test('Testa rota default',async ()=>{   
     

        const resposta = await request(app).get("/list");
        expect(resposta.statusCode).toBe(200);
                
   })



})

const { IsVazio } = require('../../controllers');


describe('Testes Unitarios', ()=>{
    test('Verifica se campo está vazio',()=>{        
        expect(IsVazio("")).toBe(true);
    })
})

const { IsVazio } = require('../../controllers');


describe('Testes Unitarios', ()=>{
    test('Verifica se campo está vazio',()=>{        
        expect(IsVazio("x".repeat(0))).toBe(true);
    })
})

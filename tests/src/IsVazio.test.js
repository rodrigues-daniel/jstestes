const { IsVazio } = require('../../controllers');


describe('Testes Unitarios', ()=>{
    it('Verifica se campo está vazio',()=>{        
        expect(IsVazio("x".repeat(0))).toBe(true);
    })
})

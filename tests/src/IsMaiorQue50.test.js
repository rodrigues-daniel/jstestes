const { IsMaiorQue50 } = require('../../controllers');


describe('Testes Unitarios', ()=>{
    test('Verifica se possui mais que 50 caracteres',()=>{        
        expect(IsMaiorQue50("x".repeat(51))).toBe(true);
    })
})

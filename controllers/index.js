const { Posts } = require('../models');

module.exports = {
   
    
    IsMaiorQue50(texto){

        if(texto.length >= 50){
            return true;
        }

        return false;

    },

    IsVazio(texto){

        if(texto.length == 0){
            return true;
        }

        return false;

    }
};
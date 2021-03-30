const express = require('express');
const { IsMaiorQue50, IsVazio } = require('./controllers');

const { Posts } = require('./models');


const routes = express.Router();

routes.get('/', async (req,res)=>{

  const resposta = await Posts.findAll();
 

  return res.json(resposta);
})


routes.post('/post', async (req,res) => {

  const { texto }  = req.body;

  if(IsVazio(texto)){    
    return res.json({'Resposta':'Texto vazio'});
  }
    

  if(IsMaiorQue50(texto)){    
    return res.json({'Resposta':'Post maior que 50 caracteres'});
  }

  let ts = Date.now();

  let obj_data = new Date(ts);
  let dia = obj_data.getDate();
  let mes = obj_data.getMonth() + 1;
  let ano = obj_data.getFullYear();
  
  let dataString = dia + '/' + mes + '/' + ano;


  const novopost = await Posts.create({ texto, data:dataString });  

  return res.json(novopost);

});


module.exports = routes;
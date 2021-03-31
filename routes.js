const express = require('express');
const { IsMaiorQue50, IsVazio } = require('./controllers');
const { Posts } = require('./models');
const path = require('path');

const routes = express.Router();



routes.get('/', async (req,res)=>{

  res.sendFile(path.join(__dirname + '/public/form.html'))
    

})


routes.get('/vazio', async (req,res)=>{

  return res.send("Formulario vazio, digite algo e envie novamente <a href='http://localhost:3000/'>Voltar</a>");
    

})

routes.get('/maiorque50', async (req,res)=>{

  return res.send("Ultrapassou o Limite de 50 Caracteres Volte\
   e tente novamente! <a href='http://localhost:3000/'>Voltar</a>");
    

})


routes.get('/list', async (req,res)=>{

    const resposta = await Posts.findAll(); 
  
    return res.json(resposta);

})


routes.post('/post', async (req,res) => {

  const { texto,data }  = req.body;
  

  console.log(data);

  if(IsVazio(texto)){  
     
     res.redirect('/vazio');
  }
    

  if(IsMaiorQue50(texto)){    
      
     res.redirect('/maiorque50')
     
  }

  if(data != null){

       
        const novopost = await Posts.create({ texto, data});  

        //return res.json(novopost);

         
        res.redirect('/list');

  }

  let ts = Date.now();

  let obj_data = new Date(ts);
  let dia = obj_data.getDate();
  let mes = obj_data.getMonth() + 1;
  let ano = obj_data.getFullYear();
  
  let dataString = dia + '/' + mes + '/' + ano;

  const novopost = await Posts.create({ texto, data:dataString });  

  //return res.json(novopost);

  res.redirect('/list')

});


module.exports = routes;
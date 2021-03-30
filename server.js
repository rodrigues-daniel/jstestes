const express = require('express');
const routes = require('./routes');
const port = 3000;

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(routes);
app.use(express.static('public'));

console.log(process.env.port);


app.listen(process.env.port || port , () => {
    console.log(`Servidor Iniciado na porta http://localhost:${port}`);
});

module.exports = app;
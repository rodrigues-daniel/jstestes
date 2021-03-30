const express = require('express');
const routes = require('./routes');
const port = 5000;

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(routes);
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Servidor Iniciado na porta http://localhost:${port}`);
});

module.exports = app;
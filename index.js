const app = require('./server');
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Iniciado na porta http://localhost:${port}`);
});
const express = require ('express');

const app = express();

app.get('/', function (req, res) {
    res.status(200).send('Hola :D');
  });
  
app.listen(3000, function () {
    console.log('Estoy Funcionando ing.');
  });
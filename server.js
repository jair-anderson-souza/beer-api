//importação do express JS
const express = require('express');
//chamando a função d express JS
const app = express();

const mongoose = require('mongoose');

const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/beer', {
  useNewUrlParser: true
});

//mapeando a pasta de todas as entidades
requireDir('./src/models');

//chamando o schema definido no modelo
var User = mongoose.model('User');

User.create({
  id: 1,
  name: 'Jair Anderson',
  username: 'jair',
  password: '',
  roles: [
    {
    }
  ];
});

//add método GET na raiz da app
app.get('/', (req, resp) => {



  resp.send('Enviando resposta');
});

//add a porta padrão do servidor
app.listen(3000);

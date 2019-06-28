//importação do express JS
const express = require('express');
//chamando a função d express JS
const app = express();

//add método GET na raiz da app
app.get('/', (req, resp) => {
  resp.send('Enviando resposta');
});
//add a porta padrão do servidor
app.listen(3000);

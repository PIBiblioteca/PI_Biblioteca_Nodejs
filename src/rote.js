const routes = require("express").Router();
const fatecApi = require('fatec-api');

routes.get('/', (req, res) => {
    res.send('Hello World!')
  })

routes.post('/login', function (req, res) {
    const {usuario, senha} = req.body;
    const minhaConta = new fatecApi.Account(usuario, senha);
    
    minhaConta.getProfile().then(nome => {
        console.log(nome)
        return res.json({ text: nome});
        // <- 'SEU NOME COM CAPSLOCK'
    })
});

module.exports = routes;
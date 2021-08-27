const fatecApi = require('fatec-api')
const minhaConta = new fatecApi.Account('628281699SP', '41350925861')
 
minhaConta.getProfile().then(nome => {
    console.log(nome)
    // <- 'SEU NOME COM CAPSLOCK'
})
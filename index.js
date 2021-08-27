const fatecApi = require('fatec-api')
const minhaConta = new fatecApi.Account('', '')
 
minhaConta.getProfile().then(nome => {
    console.log(nome)
    // <- 'SEU NOME COM CAPSLOCK'
})
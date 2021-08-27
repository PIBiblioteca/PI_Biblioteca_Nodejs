
(async () => {
    const db = require("./db");
    console.log('começou!');
    console.log('SELECT * FROM LIVROS');
    const livros = await db.selectCustomers();
    console.log(livros);
})();
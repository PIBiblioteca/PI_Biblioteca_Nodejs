// app.js
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '', // A senha do usuário. Ex: user123
    database: 'bibliofateca' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.query(
    'SELECT b.id, b.title, a.name, a.location FROM book as b INNER JOIN author as a ON b.author = a.id', 
    (err, rows) => {
    if (err) throw err

    rows.forEach(row => {
        console.log(`${row.title} by ${row.name}, ${row.location}`)
    });
})


con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
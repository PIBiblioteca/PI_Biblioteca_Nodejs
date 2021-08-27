
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/bibliofateca");
    console.log("Conectou");
    global.connection = connection;
    return connection;  
}
connect();


async function selectCustomers(){
    const conn = await connect();
    const [rows] = conn.query('SELECT * FROM LIVROS;');
    return await rows;
}

module.exports = {selectCustomers}
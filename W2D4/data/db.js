const mysql = require("mysql2");
const connDetails = {
    host : "localhost",
    user : "root",
    password : "pass@123",
    database : "db1"
}

function getConnection(){
    return mysql.createConnection(connDetails);
}

function executeQuery(query,parameters,callback){
    let connection = getConnection();
    connection.connect();
    connection.query(query, parameters,callback);
    connection.end();
}

module.exports.executeQuery = executeQuery;
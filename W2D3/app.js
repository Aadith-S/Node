// const http = require("http");
// const qs = require("querystring");
// const url = require("url");
const mysql = require("mysql2");
const readline = require("readline-sync");
const connDetails = {
    host : "localhost",
    user : "root",
    password : "pass@123",
    database : "db1"
}

var email = readline.question("Enter Mail:");
// const query = `select * from customers where email="${email}"`;
const query = `select * from customers where email=?`;
console.log(query);
let connection = mysql.createConnection(connDetails);
connection.connect((err)=>{
    if(err){
    console.log(err);
    }
})
connection.query(query,[email],(err,result)=>{
    console.table(result);
    if(err){
        console.log(err);
    }
})

connection.end();
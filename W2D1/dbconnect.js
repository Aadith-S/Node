const http = require("http");
const url = require("url");
const mysql = require("mysql2");
const readline = require("readline-sync");
const connDetails = {
    host : "localhost",
    user : "root",
    password : "pass@123",
    database : "db1"
}
function getconnection() {
    return mysql.createConnection(connDetails);
}
function executequery(query,parameters){
    let connection = getconnection();
    return new Promise((resolve, reject) => {
        connection.query(query,parameters,(err,result) => {
            connection.end();
            if(err){
            reject(err);
            }else{
            resolve(result);
            }
        })})
 }
async function run(query,parameters){
    const result = await executequery(query, parameters);
    try{
    return result;
    }
    catch(e){
        console.log(e);
    }
}
module.exports.run = run;
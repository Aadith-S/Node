const db = require("./db");

function getAll(callback){
    const sql = "SELECT id,name,email,country,age FROM customers";
    db.executeQuery(sql,[],callback);
}
function putData(user,callback){
    const sql = "INSERT INTO customers (name,email,country,age) VALUES (?,?,?,?)";
    db.executeQuery(sql,[user.name,user.email,user.country,user.age],callback);
}
module.exports.getAll = getAll;
module.exports.putData = putData;
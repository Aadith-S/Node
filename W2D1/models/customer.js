const { question } = require("readline-sync");
const db = require("../dbconnect");
const qs =require("querystring");

function getALL(){
    var query = "SELECT * FROM customers";
    var parameters = [];
    return new Promise((res,rej)=>{
        var result = db.run(query,parameters);
        res(result);
    })
}
function addUser(query){
    var parameters = [];
    var obj = qs.parse(query);
    parameters = Object.values(obj);
    console.log(parameters);
    var qry = "INSERT INTO customers (name,email,country,age) VALUES (?,?,?,?);"
    return new Promise((res,rej)=>{
        var result = db.run(qry,parameters);
        console.log(result);
        res("User Added"+" "+String(parameters));
    })
}
function delUser(id){
    var parameters = [];
    parameters.push(id);
    console.log(parameters);
    var qry = "DELETE FROM customers WHERE id = ?"
    return new Promise((res,rej)=>{
        var result = db.run(qry,parameters);
        console.log(result);
        res("User Deleted"+" "+String(parameters));
    })
}
function updateUser(query,id){
    var parameters = [];
    let qstring = [];
    var obj = qs.parse(query);
    parameters = Object.values(obj);
    var keyss = Object.keys(obj);
    console.log(keyss);
    console.log(parameters);
    console.log(parseInt(id));
    return new Promise((res,rej)=>{
    for(let i = 0; i<parameters.length;i++){
        qstring = [];
        qstring.push(parameters[i]);
        qstring.push(parseInt(id));
        console.log(qstring);
    var qry = "UPDATE customers SET "+keyss[i]+" = ? WHERE id = ?"
    var result = db.run(qry,qstring);
    if(result){
        res("Updated");
    }
    else{
        rej("Error");
    }
    }
    })
}

module.exports.getALL = getALL;
module.exports.addUser = addUser;
module.exports.delUser = delUser;
module.exports.updateUser = updateUser;
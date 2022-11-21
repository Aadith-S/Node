const { write } = require("fs");
const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
const users = require("./models/customer");
var app = http.createServer((req,res)=>{
    var link = url.parse(req.url);
    var query = link.query;
    var path = link.pathname;
    if(path == "/api/users"){
        users.getALL().then(result=>{
            res.end(JSON.stringify(result));
        })
    }
    if(path == "/api/user/add" && req.method == "POST"){
        var body = "";
        req.on("data", data => {
            body += data;
        })
        req.on("end", () => {
        console.log(body)
        users.addUser(body).then(result=>{
            res.end(result);
        })
        })}
        if(path == "/api/user" && req.method == "DELETE"){
            let qry = qs.parse(query);
            users.delUser(qry.id).then(result=>{
                res.end(result);
            })
        }
        if(path == "/api/user" && req.method == "PUT"){
            let qry = qs.parse(query);
            var body = "";
            req.on("data", data => {
                body += data;
            })
            req.on("end", () => {
            console.log(body)
            users.updateUser(body,qry.id).then((result) =>res.end(result));
            })
        }
        // if(path == "/api/user/update/name" && req.method == "GET"){
        //     let qry = qs.parse(query);
        //     users.delUser(qry.id,"name").then(result=>{
        //         res.end(result);
        //     })
        // }
        // if(path == "/api/user/update/email" && req.method == "GET"){
        //     let qry = qs.parse(query);
        //     users.delUser(qry.id,"email").then(result=>{
        //         res.end(result);
        //     })
        // }
        // if(path == "/api/user/update/country" && req.method == "GET"){
        //     let qry = qs.parse(query);
        //     users.delUser(qry.id,"country").then(result=>{
        //         res.end(result);
        //     })
        // }
        // if(path == "/api/user/update/age" && req.method == "GET"){
        //     let qry = qs.parse(query);
        //     users.delUser(qry.id,"age").then(result=>{
        //         res.end(result);
        //     })
        // }
}).listen(80);

const { write } = require("fs");
const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
var whole = "";
var app = http.createServer((req,res)=>{
    // console.log("Message");
    // res.write("Hello From Node");
    // res.end("<h1>HELLO BOI</h1>");
    // res.write("<h1>");
    // for(let i = 0;i<10;i++){
    //     res.write(""+i);
    // }
    // res.write("</h1>")
    // res.end();
    // if(req.url == "/"){
    //     res.end("<h1>Welcome</h1>");
    // }
    // else if(req.url == "/about"){
    //     res.end("<h1>About Us</h1>");
    // }
    // else if(req.url == "/contact"){
    //     res.end("<h1>Contact</h1>");
    // }
    var fullurl = url.parse(req.url,true);
    if(fullurl.pathname == "/"){
        // res.write(`
        // <html>
        //     <head>
        //         <title>${req.url}</title>
        //     </head>
        //     <body>
        //         <h1>Home Page</h1>
        //     </body>
        // </html>
        // `)
        let content = fs.readFileSync("templates/index.html");
        res.end(content);
    }
    else if(fullurl.pathname == "/about"){
            let content = fs.readFileSync("templates/aboutus.html");
            res.end(content);
        }
    else if(fullurl.pathname == "/login"){
        let content = fs.readFileSync("templates/login.html");
        res.end(content);
    }
    else if(fullurl.pathname == "/result" && req.method == "GET"){
        res.end(fullurl.query.email);
    }
    else if(fullurl.pathname == "/result" && req.method == "POST"){
        req.on("data",data=>{
            whole += data;
        })
        req.on("end",()=>{
            var ele = qs.parse(whole)
            res.end("Email :"+ele.email+"\nPassword :"+ele.pass);
        })
    }
});
app.listen(80);
app.on("listening",()=>{
    console.log("Server listening");
})
app.on("request",(req,res)=>{
    console.log(`${req.method}  request to page ${req.url}`);
})

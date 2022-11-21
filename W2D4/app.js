const http =require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const customer = require("./data/customer");
const qs = require("querystring");
registerPartials("navbar");
registerPartials("footer");
http.createServer((req,res)=>{
    const link = url.parse(req.url,true);
    const query = link.query;
    const page = link.pathname;

    if(page == "/"){
        customer.getAll((err,result)=>{
        var context = {data : result};
        console.log(context);
        res.end(renderTemplate("index",context));
        });
    }
    else if(page == "/customer/create" && req.method == "GET"){
        res.end(renderTemplate("create",{}));
    }
    else if(page == "/customer/create" && req.method == "POST"){
        let formData = "";
        req.on("data",(chunk)=>{
                    formData += chunk.toString();
        });
        req.on("end",()=>{
            var context = {
                result:{
                email : true,
                success: true,
                errors : []}};
            let userData = qs.parse(formData);
            let validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            console.log(userData);
            if(userData.email.match(validemail)){
                context.result.email = true;
            }
            else{
                context.result.email = false;
            }
            console.log(context);
            customer.putData(userData,(err, result)=>{
                if(err){
                    context.result.success = false;
                    console.log(err);
                }
                res.end(renderTemplate("create",context));
            });
        });
    }
}).listen(80);

function renderTemplate(name,data){
    var filePath = path.join(__dirname,"templates",name+".hbs");
    let templatetext = fs.readFileSync(filePath,"utf-8");
    let template = Handlebars.compile(templatetext);
    return template(data);
}
function registerPartials(data){
    var filePath = path.join(__dirname,"templates","partials",data+".hbs");
    let templatetext = fs.readFileSync(filePath,"utf-8");
    Handlebars.registerPartial(data,templatetext);
}





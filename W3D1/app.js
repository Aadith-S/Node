const {Sequelize,DataTypes, JSON, STRING, Op} = require("sequelize");
const express = require("express");
const path = require("path");
const parser = require('body-parser');
const sequelize = new Sequelize("db1","root","pass@123",{
    host : "localhost",
    dialect : "mysql"
});
const app = express();

app.use(parser.urlencoded({extended: false}));
app.use("/static",express.static(path.join(__dirname,"static")));
app.use("/",(req,res,next)=>{
    console.log("Recieved request");
    next();
})
app.get("/",(req,res)=>{
    // res.send("<h1>Hi from express</h1>");
    // res.json({status : true});
    let location = path.join(__dirname, "views","index.html");
    res.sendFile(location);
})
app.get("/about",(req,res)=>{
    res.send("About Page");
})
app.get("/employee/create",(req,res)=>{
    let loc = path.join(__dirname, "views","form.html");
    res.sendFile(loc);
})
app.post("/employee/create",(req,res)=>{
    console.log(req.body);
    res.json(req.body);
})
app.listen(80);


// sequelize.authenticate()
// .then(()=>{
//     console.log("Connection established successfully");
// })
// .catch((err)=>{
//     console.error("Unable to connect to database",error);
// })

// const User  = sequelize.define("User",{
//     id : {
//         type : DataTypes.INTEGER,
//         primaryKey : true,
//         autoIncrement : true
//     },
//     name : {
//         type : DataTypes.STRING(50),
//         allowNull : false
//     },
//     email : {
//         type : DataTypes.STRING(50),
//         allowNull : false,
//         unique : true
//     },
//     age : {
//         type : DataTypes.INTEGER,
//         defaultValue : 18,
//         allowNull : false
//     },
//     country : {
//         type : DataTypes.STRING(50),
//         allowNull : false
//     }
// });

// user.sync({alter : true});
// user.create({name : "amal1",email : "amal1@mail",age : 22})
// .then((user) => {
//     console.log("Data Saves Successfully",user.toJSON());
// }
// )
// .catch((err)=>{
//     console.error("Unable to save data",err);
// })

// User.findAll({
//     where : {
//             id : 1
//     }
// }).then((data)=>{
//    data.forEach((ud)=>{
//     console.log(ud.dataValues);
//    })
// })
// .catch((err)=>{
//     console.error("No data found",err);
// })
// User.findByPk(1).then((data)=>{
//     console.log(data.dataValues);

// })

// User.findAll({
//     where : {
//         id : {
//             [Op.gte] : 2
//         }
//     }
// }).then((data)=>{
//     data.forEach(ud=>{console.log(ud.dataValues);})
// })
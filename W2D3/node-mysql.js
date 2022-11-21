const db = require("./dbconnect")
var query = "select * from customers";
var parameters = [];
db.run(query,parameters);
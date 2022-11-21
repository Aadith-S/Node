const fs = require("fs");
var obj =JSON.parse(fs.readFileSync("data.json","utf-8"));
var usermanager = {
    users : obj,
    getContent : function(){
        return this.users;
    }
}
module.exports = usermanager;
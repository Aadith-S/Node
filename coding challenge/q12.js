const readline = require("readline-sync");
var pname = 0;
var pnames = [];
var dest = "";
var destinations = [];
var pdetail = [];
var pdetails = [];
while(true){
    pname = readline.question("Enter Passenger Name: ");
    if(pname == ""){
        break;
    }
    dest = readline.question("Enter Destination: ")
    pnames.push(pname);
    destinations.push(dest);
}
for(let i = 0;i<pnames.length;i++){
    pdetail = [];
    pdetail.push(pnames[i]);
    pdetail.push(destinations[i]);
    pdetails.push(pdetail);
}
console.log(pdetails);
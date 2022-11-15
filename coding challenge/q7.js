const readline = require("readline-sync")
var passenger = {
    name : "",
    totalmiles : 0,
    flyerpoints : 0

}
while(true){
passenger.name = readline.question("Enter Name: ");
passenger.totalmiles = parseInt(readline.question("Enter miles: "));
if(passenger.totalmiles>10000){
    passenger.flyerpoints += 10;
}
if(passenger.totalmiles>20000){
    passenger.flyerpoints += 20;
}
if(passenger.totalmiles>50000){
    passenger.flyerpoints += 30;
}
else{
    passenger.flyerpoints += 50;
}
console.log("passengerenger Details: ");
console.log(passenger);
var opt =readline.question("press q to quit");
if(opt == "q"){
    break;
}
}
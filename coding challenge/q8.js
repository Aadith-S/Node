const readline = require("readline-sync");
var fare = 0;
var fares = [];
var dest = "";
var destinations = [];
while(true){
    fare = readline.question("Enter Fare: ");
    if(fare == ""){
        break;
    }
    dest = readline.question("Enter Destination: ")
    fares.push(parseInt(fare));
    destinations.push(dest);
}
while(true){
    var n = readline.question("Input number to view fare and destination:")
    if(n<fares.length){
    console.log("Destination is "+destinations[n-1]);
    console.log("Fare is "+fares[n-1]);
    }
    else{
    console.log("NO DATA FOUND");
    }
    var opt = readline.question("Press q to quit: ");
    if(opt == "q"){
        break;
    }
}
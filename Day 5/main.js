const fs = require("fs");
var count = 1;
const readline = require("readline-sync");
const { json } = require("stream/consumers");
var record = {};

function addPassenger(id){
    let name = readline.question("Input Name:");
    let age = readline.question("Input Age:");
    let sex = readline.question("Input Sex:");
    let pno = readline.question("Input Phone Number:")
    if(fs.readFileSync("PassengerList.json").length != 0){
    record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    }
    var passenger = 
    {   ID : id,
        Name : name,
        Age : age,
        Sex : sex,
        Phone : pno
    }
    record[id] = passenger;
    fs.writeFileSync("PassengerList.json",JSON.stringify(record));
    count++;
}

function getPassenger(id){
    record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    if(record[id]!=undefined){
        console.log(record[id]);
    }
    else{
        console.log("not Found");
    }
}

function updatePassenger(id){
    var record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    console.log();
    console.log("UPDATE PASSENGER");
    console.log("1 . Update Name");
    console.log("2 . Update Age");
    console.log("3 . Update Sex");
    console.log("4 . Update Phone Number");
    console.log("5 . Cancel Update");

    let a = readline.question("Select an Option :")
    switch(a){
        case "1" : record[id].Name = readline.question("Enter Name:");
        break;
        case "2" : record[id].Age = parseInt(readline.question("Enter Age:"));
        break;
        case "3" : record[id].Sex = readline.question("Enter Sex:");
        break;
        case "4" : record[id].Phone = parseInt(readline.question("Enter Phone Number:"));
        break;
        case "5" : break;
        default : console.log("Wrong Option!!")
    }
    fs.writeFileSync("PassengerList.json",JSON.stringify(record));
    
}

function deletePassenger(id){
    var record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    delete record[id];
    fs.writeFileSync("PassengerList.json",JSON.stringify(record));
}
function main(){ 
    while(true){
        console.log();
        console.log("PASSENGER DETAILS");
        console.log("1 . Add User");
        console.log("2 . Search User");
        console.log("3 . Update User");
        console.log("4 . Delete User");
        console.log("5 . Exit");

        let a = readline.question("Select an Option :")
        switch(a){
            case "1" : addPassenger(count);
            break;
            case "2" : let opt1 = parseInt(readline.question("Enter ID to Search:"));
            getPassenger(opt1);
            break;
            case "3" : let opt2 = parseInt(readline.question("Enter ID to Update:"));
            updatePassenger(opt2);
            break;
            case "4" : let opt3 = parseInt(readline.question("Enter ID to Delete:"));
            deletePassenger(opt3);
            break;
            case "5" :  process.exit(0);
            default : console.log("Wrong Option!!")
            break;
        }
    }
}
main();
const fs = require("fs");
const readline = require("readline-sync");
const { json } = require("stream/consumers");
var record = {};
var count = 1;
if(fs.existsSync("PassengerList.json"))
    {
        record = JSON.parse(fs.readFileSync("PassengerList.json","utf8"));
        if(record != "")
        {
        count = Object.keys(record).pop();
        count++;
        }
    }
else{
    fs.writeFileSync("PassengerList.json","");
}
function addPassenger(id){
    let name = readline.question("Input Name:");
    let age = readline.question("Input Age:");
    let sex = readline.question("Input Sex:");
    let pno = [];
    let mail = readline.question("Input Email:");
    while(true){
    let pnoe = readline.question("Input Phone Numbers:");
    pno.push(pnoe);
    let y = readline.question("Want to enter more(Y/N):");
    if(y == "n" || y == "N"){
        break;
    }
    }
    if(fs.readFileSync("PassengerList.json").length != 0){
    record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    }
    var passenger = 
    {   ID : id,
        Name : name,
        Age : age,
        Sex : sex,
        Email : mail,
        Phone : pno
    }
    record[id] = passenger;
    fs.writeFileSync("PassengerList.json",JSON.stringify(record));
    count++;
}
async function getData(){
    return fs.readFile("PassengerList.json","utf8",(err,data)=>{
            if(err){
            return "No Data";
            }
            return JSON.parse(data);
        });
}
function getPassenger(){
    record =JSON.parse(fs.readFileSync("PassengerList.json","utf8"));
    console.log("1 . Search by ID");
    console.log("2 . Search by email");
    let option = parseInt(readline.question("Enter option:"));
    switch(option)
    {
        case 1 : let id = parseInt(readline.question("Enter ID to Search:"));
            if(record[id]!=undefined){
            console.log(record[id]);
        }
        else{
            console.log("not Found");
        }
        break;
        case 2 : let mail = readline.question("Enter Email to Search:");
        for(let i = 1; i< count ; i++){
            if(record[i].Email == mail){
                console.log(record[i]);
                break;
            }
            else{
                console.log("Not found");
            }
        }
        break;
        default:console.log("Wrong option");
    }
}

function updatePassenger(id){
    var record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    console.log();
    console.log("UPDATE PASSENGER");
    console.log("1 . Update Name:");
    console.log("2 . Update Age;");
    console.log("3 . Update Sex:");
    console.log("4 . Update Phone Number:");
    console.log("4 . Update Email:");
    console.log("5 . Cancel Update");

    let a = readline.question("Select an Option :")
    switch(a){
        case "1" : record[id].Name = readline.question("Enter Name:");
        break;
        case "2" : record[id].Age = parseInt(readline.question("Enter Age:"));
        break;
        case "3" : record[id].Sex = readline.question("Enter Sex:");
        break;
        case "4" : changephn(id);
        break;
        case "5" : break;
        default : console.log("Wrong Option!!")
    }
    fs.writeFileSync("PassengerList.json",JSON.stringify(record));
    
}

function deletePassenger(id){
    record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    delete record[id];
    fs.writeFileSync("PassengerList.json",JSON.stringify(record));
}

function changephn(id){
    for(let i = 0 ;i<record[id].Phone.length;i++){
    let phn = parseInt(readline.question("Edit Phone Number"+(i+1)+":"));
    record[id].Phone[i] = phn == "" ? record[id].Phone[i]:phn;
}
}

function alluser(){
    record = JSON.parse(fs.readFileSync("PassengerList.json","utf-8"));
    for(let i = 1 ; i< count ; i++){
        console.log();
        console.log("Passenger "+i)
        console.log("ID:"+record[i].ID);
        console.log("Name:"+record[i].Name);
        console.log("Age:"+record[i].Age);
        console.log("Sex:"+record[i].Sex);
        console.log("Email:"+record[i].Email);
        console.log("Phone Numbers:"+record[i].Phone);
    }
}

function main(){ 
    while(true){
        console.log();
        console.log("PASSENGER DETAILS");
        console.log("1 . Add User");
        console.log("2 . Search User");
        console.log("3 . Update User");
        console.log("4 . Delete User");
        console.log("5 . Display All Users");
        console.log("6 . Exit");

        let a = readline.question("Select an Option :")
        switch(a){
            case "1" : addPassenger(count);
            break;
            case "2" :  getPassenger();
            break;
            case "3" : let opt2 = parseInt(readline.question("Enter ID to Update:"));
            updatePassenger(opt2);
            break;
            case "4" : let opt3 = parseInt(readline.question("Enter ID to Delete:"));
            deletePassenger(opt3);
            break;
            case "5" :  alluser();
            break;
            case "6" :  process.exit(0);
            default : console.log("Wrong Option!!")
            break;
        }
    }
}
main();
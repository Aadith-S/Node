const readline = require("readline-sync");
var flight = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var bpass = "";
var seats = 0;
var freeseat = 0;

while(true){
    bpass = readline.question("Input Boarding pass : ");
    seats =parseInt(readline.question("Input No of Seats : "));
    for(let i = 0;i<5;i++){
        if(seats>5){
            console.log("No Seats available");
            break;
        }
        freeseat = 0;
        for(let j = 0;j<5;j++){
            if(flight[i][j] == 0){
                freeseat++;
            }
        }
        if(freeseat >= seats && seats >0){
            for(let k = 0;seats>0;k++){
                if(flight[i][k] == 0 ){
                    flight[i][k] = bpass;
                    seats--;
                }
            }
        }
    }
    console.log(flight);
    var opt = readline.question("press q to quit:");
    if(opt == "q"){
        break;
    }
}
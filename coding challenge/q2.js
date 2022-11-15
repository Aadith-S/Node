const readline = require("readline-sync");
var ff =parseInt(readline.question("Input Flight Fare:"));
var btime = readline.question("Input Booking Time:");
var bt1 = 0;
check();
console.log("Your new fare is "+ff);
function check(){
    if(btime[btime.length-2]=="a"){
        if(btime.length < 6){
            console.log("hi");
        bt1 = parseInt(btime[0]);
        }
        else{
            bt1 = parseInt(btime[0]+btime[1]);
        }
    }
    else{
        if(btime.length < 6){
            console.log("hi");
        bt1 = parseInt(btime[0])+12;
        }
        else{
            bt1 = parseInt(btime[0]+btime[1])+12;
        }
    }
    console.log(bt1);
    if(bt1 >= 6 && bt1<9){
        ff = ff+(ff*10/100);
    }
    else if( bt1 >=9 && bt1<17){
        ff = ff+(ff*20/100);
    }
    else if(bt1 >= 17 && bt1 <23){
        ff = ff+((ff/100)*7);
    }
    else{
        ff = ff+(ff*5/100);
    }
}
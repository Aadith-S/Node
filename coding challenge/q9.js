const readline = require("readline-sync");
var ages = [];
const dnow = new Date();
var types = [];
for(let i = 0;i<10;i++){
    var date = new Date(readline.question("Input DOB of Passenger "+(i+1)+": "));
    ages.push(dnow.getFullYear()-date.getFullYear());
}
console.log(ages);
ages.forEach(a=>{
    if(a<10){
        types.push("Kid");
    }
    else if(a<30){
            types.push("Youth");
    }
    else if(a<60){
            types.push("Adult");
    }
    else{
            types.push("Older");
    }
})
console.log(types);
const readline = require("readline-sync");
const dnow = new Date();
var passdate = readline.question("Input Date -Format(2022-03-25):");
const dpass = new Date(passdate);
var passAge = dnow.getFullYear()-dpass.getFullYear();
var passAgeMonths = passAge*12;
var passAgeWeeks = passAgeMonths*4+1*passAge;
var passAgeDays = passAgeWeeks*28+7*passAge;
var passAgeHrs = passAgeDays*12;
console.log("Age In Hours : "+passAgeHrs+"");
console.log("Age In Days : "+passAgeDays);
console.log("Age In Weeks : "+passAgeWeeks);
console.log("Age In Months : "+passAgeMonths);
console.log("Age In Years : "+passAge);
if(dpass.getFullYear() % 4 == 0){
    if(passAge % 100 == 0){
        if(passAge % 400 == 0){
            console.log("It is a leap year.");
        }
    }
    else{
        console.log("It is a leap year.");
    }
}

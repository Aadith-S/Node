const readline = require("readline-sync");
var num = 0;
var numo = [];
var nume =[];
var nums = [];
var count = 1;
var i = 1;
console.log("Input Fares:")
while(true){
    num = readline.question();
    if(num == ""){
        break;
    }
    else{
        if(num%2==0){
        nume.push(num);
        }
        else{
            numo.push(num);
        }
        i++;
    }
}
let e = 0,o = 0;
for(let i = 0;i<nume.length+numo.length;i++){
        // if(e<nume.length){
        //     if(i%2==0){
        //     nums.push(nume[e]);
        //     e++;
        //     }
        // }
        // else if(e>nume.length){
        //     nums=nums+numo;
        // }
        // else if(o<numo.length){
        //     if(i%2!=0){
        //     nums.push(numo[o]);
        //     o++;
        //     }
        // }
        // else{
        //     nums=nums+nume;
        // }
    if(i%2==0){
        
    }
}
process.stdout.write("Odd Position: ") ;
console.log(numo) ;
console.log();
process.stdout.write("Even Position: ");
console.log(nume) ;
console.log(nums);
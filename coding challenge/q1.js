const readline = require("readline-sync");
console.log("Input Passenger names:");
var name = "";
var names = [];
for(let i = 0;i < 10; i++){
    name = readline.question("Name "+(i+1)+" :");
    names.push(name.toLowerCase());
}
function sortnames(){
    let temp = "";
    for(let i = 0;i<names.length;i++){
        for(let j = 1;j<names.length-i;j++){
            if(names[j-1]>names[j]){
                temp = names[j-1];
                names[j-1] = names[j];
                names[j] = temp;
            }
        }
    }
    console.log("ascending: ");
    for(let i = 0;i<names.length;i++){
        process.stdout.write(names[i]+" ");
    }
    console.log();
    console.log("descending: ");
    for(let i = names.length-1;i>=0;i--){
        process.stdout.write(names[i]+" ");
    }
}

function search(n){
    let i = 0;
    names.forEach(e=>{
        if(e == n){
            console.log(n+" found in array at position "+i);
            i++;
        }
    })
}
function len(){
    names.forEach(n=>{
        console.log("Length of "+n+" is "+n.length)
    })
}
function splitname(){
    let sname = "";
    names.forEach(n=>{
        sname = n.split(" ");
        process.stdout.write("For "+n+" : "); 
        sname.forEach(e=>{
            process.stdout.write(e); 
        })
        console.log();
    })
}
function dupli(){
    let vistited = [];
    let flag = 1;
    console.log("duplicate names are :")
    for(let i = 0;i<names.length;i++){
        for(let j = i+1;j<names.length;j++){
            if(names[i] == names[j]){
                flag = 1;
                vistited.forEach(v =>{
                    if(names[i] == v){
                        flag = 0;
                    }
                })
                if(flag){
                    console.log(names[i]);
                    vistited.push(names[i]);
                }
            }
        }
    }
}
sortnames();
console.log();
let srch = readline.question("Input name to search:");
search(srch);
len();
splitname();
dupli();
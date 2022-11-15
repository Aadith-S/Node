const readline = require("readline-sync");
console.log("Input Flight Fares:");
var fare = 0;
var fares = [];
for(let i = 0;i < 10; i++){
    fare =parseInt(readline.question("Fare "+(i+1)+" :"));
    fares.push(fare);
}
function sortfares(){
    let temp = 0;
    for(let i = 0;i<fares.length;i++){
        for(let j = 1;j<fares.length-i;j++){
            if(fares[j-1]>fares[j]){
                temp = fares[j-1];
                fares[j-1] = fares[j];
                fares[j] = temp;
            }
        }
    }
    console.log("ascending: ");
    for(let i = 0;i<fares.length;i++){
        process.stdout.write(fares[i]+" ");
    }
    console.log();
    console.log("descending: ");
    for(let i = fares.length-1;i>=0;i--){
        process.stdout.write(fares[i]+" ");
    }
}
function search(n){
    let i = 0;
    fares.forEach(e=>{
        if(e == n){
            console.log(n+" found in array at position "+i);
            i++;
        }
    })
}

function maxmin(){
    let max = fares[0], min = fares[0];
    fares.forEach(n=>{
        if(n>max){
            max = n;
        }
        if(n<min){
            min = n;
        }
    })
    console.log("Max : "+max);
    console.log("Min : "+min);
}

function dupli(){
    let vistited = [];
    let flag = 1;
    console.log("duplicate fares are :")
    for(let i = 0;i<fares.length;i++){
        for(let j = i+1;j<fares.length;j++){
            if(fares[i] == fares[j]){
                flag = 1;
                vistited.forEach(v =>{
                    if(fares[i] == v){
                        flag = 0;
                    }
                })
                if(flag){
                    console.log(fares[i]);
                    vistited.push(fares[i]);
                }
            }
        }
    }
}
search(parseInt(readline.question("Input fare to search:")));
sortfares();
console.log();
maxmin();
dupli();
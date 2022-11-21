const readline = require("readline-sync");
var alpha = readline.question("Input Alphabet:");
function oddOReven(a){
    var odd = [];
    var even = [];
    for(let i = 100;i<=110;i++){
        if(i%2==0){
            even.push(a+i);
        }
        else{
            odd.push(a+i);
        }
    }
    console.log("Even Range :"+even.join(","))
    console.log("Odd Range :"+odd.join(","))
}
function fibb(alp){
    var a = 0;
    var b = 1;
    var c = 1;
    console.log();
    process.stdout.write("Fibbanoci Series : ");
    process.stdout.write(""+alp+a);
    process.stdout.write(" ");
    process.stdout.write(""+alp+b);
    process.stdout.write(" ");
    for(let i = 0; i<8;i++){
        process.stdout.write(""+alp+c);
        process.stdout.write(" ");
        a = b;
        b = c;
        c = a+b;
    }
}
function prime(alp){
    var count = 0;
    var i = 2;
    var flag = 1;
    process.stdout.write("Prime Numbers : ");
    while(count<10){
        flag = 1;
        for(let j = 2;j<=i/2;j++){
            if(i%j == 0){
                flag = 0;
                break;
            }
        }
        if(flag){
            process.stdout.write(alp+i+" ");
            count++;
        }
        i++;
    }
}
function armstrong(alp){
    var count = 0;
    var r = 0,i = 153,n = 153,s = 0;
    process.stdout.write("Armstrong Numbers : ");
    while(count<1){
        n = i;
        while(n>0){
            r = n%10;
            s += r*r*r;
            n = (n-r);
            n = n/10;
            console.log(r+" "+s+" "+n)
        }
        if(s == i){
            console.log("hlo");
            process.stdout.write(i+" ");
            count--;
        }
        i++;
    }
}
oddOReven(alpha);
prime(alpha);
fibb(alpha);
armstrong(alpha);
const fs = require("fs");

console.log(fs.existsSync("./imp.txt"));

fs.writeFileSync("imp.txt","hello");
console.log("File Saved..........")

console.log(fs.existsSync("./imp.txt"));

fs.writeFile("imp.txt","not hello",()=>{
    console.log("File Saved..........")
});

console.log(fs.existsSync("./imp.txt"));

var content = fs.readFile("imp.txt",data=>{
    
    console.log(String(data));

});
console.log(fs.existsSync("./imp.txt"));

var content = fs.readFileSync("imp.txt");

console.log(content.toString());

process.stdout.write("one");
process.stdout.write("two");
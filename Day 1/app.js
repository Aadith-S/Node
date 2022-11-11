// const fs = require('fs');

// fs.writeFileSync('imp.txt',"");

// exports.greet = function greet(){
//     console.log("hi");
// }

import { heyo } from "./second.mjs";

heyo();

function greet(){
    console.log("hi");
}

export const helo = greet;
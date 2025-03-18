let fs = require("fs");

let [a, b] = fs.readFileSync("input.txt").toString().trim().split("\n");

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);

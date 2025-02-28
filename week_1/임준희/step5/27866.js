const input = require("fs").readFileSync(0).toString().trim().split("\n");

let s = input[0];
let i = parseInt(input[1]);

console.log(s[i - 1]);

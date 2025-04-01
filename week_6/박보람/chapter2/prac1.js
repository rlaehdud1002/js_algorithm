const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
// Please Write your code here.

function printStar(n) {
  if (n === 0) return;
  printStar(n - 1);
  console.log("*".repeat(n));
}

printStar(n);

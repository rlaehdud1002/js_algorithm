const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
// Please Write your code here.

let cnt = 0;

function f(n) {
  if (n === 1) return;
  cnt++;
  n % 2 === 0 ? f(parseInt(n / 2)) : f(parseInt(n / 3));
}

f(n);
console.log(cnt);

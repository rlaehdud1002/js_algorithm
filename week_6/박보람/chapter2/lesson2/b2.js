//각자리 숫자합
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

// Please Write your code here.
function f(n) {
  if (n < 10) {
    return n ** 2;
  }

  return parseInt(n % 10) ** 2 + f(parseInt(n / 10));
}

console.log(f(n));

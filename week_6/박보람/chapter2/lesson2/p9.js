const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

// Please Write your code here.

function f(n, cnt) {
  if (n === 1) return cnt;

  if (n % 2 === 0) {
    return f(n / 2, cnt + 1);
  } else {
    return f(n * 3 + 1, cnt + 1);
  }
}

console.log(f(n, 0));

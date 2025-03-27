let fs = require("fs");
let [a, b] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let result = (a * b) / gcd(a, b);
console.log(result);

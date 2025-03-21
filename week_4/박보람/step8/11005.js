let [n, m] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = "";
while (n > 0) {
  result = string[n % m] + result;
  n = parseInt(n / m);
}

console.log(result);

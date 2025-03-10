const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b, c] = input.sort((a, b) => a - b);

if (c >= a + b) {
  c = a + b - 1;
}

console.log(a + b + c);

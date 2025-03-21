let [a, b, v] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let current = 0;
let day = 0;

while (current < v) {
  day++;
  current += a;
  if (current >= v) {
    break;
  }
  current -= b;
}

console.log(day);

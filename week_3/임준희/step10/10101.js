const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

const inputSet = new Set(input);

if (sum !== 180) {
  console.log("Error");
} else if (inputSet.size === 1) {
  console.log("Equilateral");
} else if (inputSet.size === 2) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}

let [a, b, c] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (a + b + c !== 180) {
  console.log("Error");
} else if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (a + b + c === 180 && (a === b || b === c || a === c)) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}

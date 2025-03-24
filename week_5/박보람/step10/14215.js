let [a, b, c] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log(2 * (a + b) - 1);
}

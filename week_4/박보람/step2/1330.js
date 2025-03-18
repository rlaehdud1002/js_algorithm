let fs = require("fs");

let [a, b] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (a === b) {
  console.log("==");
} else if (a > b) {
  console.log(">");
} else {
  console.log("<");
}

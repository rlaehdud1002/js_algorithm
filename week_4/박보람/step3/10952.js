let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) {
    break;
  }
  console.log(a + b);
}

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

T = parseInt(input[0]);

for (let i = 1; i < T + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a} + ${b} =`, a + b);
}

// 세 막대

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

input.sort((a, b) => a - b);

if (input[0] + input[1] <= input[2]) {
  console.log(2 * (input[0] + input[1]) - 1);
} else {
  console.log(input[0] + input[1] + input[2]);
}

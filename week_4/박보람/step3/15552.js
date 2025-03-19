let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

T = parseInt(input[0]);

let result = "";

for (let i = 1; i < T + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  result += `${Number(a) + Number(b)} \n`;
}

console.log(result);

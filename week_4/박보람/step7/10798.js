let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

let result = "";

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i]) {
      result += input[j][i];
    }
  }
}

console.log(result);

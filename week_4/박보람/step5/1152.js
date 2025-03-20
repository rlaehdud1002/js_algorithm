let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

let result = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    result += Number(input[i]);
  }
}

console.log(result);

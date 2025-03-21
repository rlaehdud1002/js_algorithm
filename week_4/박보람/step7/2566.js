let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""))
  .map((line) => line.split(" ").map(Number));

let max = 0;
let result = "";

for (let i = 0; i < 9; i++) {
  if (Math.max(...arr[i]) > max) {
    max = Math.max(...arr[i]);
    result = `${i + 1} ${arr[i].indexOf(max) + 1}`;
  }
}

console.log(max);
console.log(result);

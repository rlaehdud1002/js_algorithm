let [n, arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr.split(" ").map(Number);

let result = 0;

for (a of arr) {
  if (a < 2) continue;

  let flag = 1;
  for (let i = 2; i * i <= a; i++) {
    if (a % i == 0) {
      flag = 0;
      break;
    }
  }
  if (flag === 1) {
    result++;
  }
}

console.log(result);

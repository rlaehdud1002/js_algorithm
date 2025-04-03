// 두 개의 동일한 수열

const fs = require("fs");

const [[n], a, b] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

a.sort((a, b) => a - b);
b.sort((a, b) => a - b);

let result = "Yes";
for (let i = 0; i < n; i++) {
  if (a[i] !== b[i]) {
    result = "No";
    break;
  }
}

console.log(result);

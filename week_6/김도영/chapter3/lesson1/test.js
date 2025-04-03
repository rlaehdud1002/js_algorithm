// 중앙값 계산 2

const fs = require("fs");

const [[n], arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

let result = new Array();
console.log(arr);

for (let i = 0; i < n; i += 2) {
  const newArr = arr.slice(0, i + 1).sort((a, b) => a - b);
  result.push(newArr[Math.floor(i / 2)]);
}

console.log(result.join(" "));

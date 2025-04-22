// 아름다운 수열 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

arr2.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < n - m + 1; i++) {
  let newArr = arr1.slice(i, i + m).sort((a, b) => a - b);

  let count = 0;
  for (let j = 0; j < m; j++) {
    if (arr2[j] === newArr[j]) count++;
  }

  if (count === m) result++;
}

console.log(result);

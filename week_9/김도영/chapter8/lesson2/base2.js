// 가장 작은 x 찾기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const conditions = input
  .slice(1, n + 1)
  .map((line) => line.split(" ").map(Number));

const endNum = conditions[0][1];

let result = endNum;

for (let i = 1; i <= endNum; i++) {
  let num = i;
  let isPossible = true;

  for (let condition of conditions) {
    num *= 2;

    if (condition[0] > num || !num > condition[1]) {
      isPossible = false;
    }
  }

  if (isPossible) {
    result = i;
    break;
  }
}

console.log(result);

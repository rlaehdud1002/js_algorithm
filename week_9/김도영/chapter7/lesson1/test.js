// 스승의 은혜 3

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, b] = input.shift().split(" ").map(Number);
const costArr = [];
for (let i = 0; i < n; i++) {
  const [p, s] = input.shift().split(" ").map(Number);
  costArr.push([p, s]);
}

let maxStudent = 0;

for (let i = 0; i < n; i++) {
  const totalCostArr = new Array(n).fill(0);

  for (let j = 0; j < n; j++) {
    if (i === j) {
      totalCostArr[j] += costArr[j][0] / 2 + costArr[j][1];
    } else {
      totalCostArr[j] += costArr[j][0] + costArr[j][1];
    }
  }

  totalCostArr.sort((a, b) => a - b);

  let cost = 0;
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (cost + totalCostArr[j] <= b) {
      cost += totalCostArr[j];
      count++;
    } else {
      break;
    }
  }

  maxStudent = Math.max(count, maxStudent);
}

console.log(maxStudent);

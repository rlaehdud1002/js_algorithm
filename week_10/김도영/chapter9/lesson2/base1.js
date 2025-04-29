// 비둘기와 전기줄

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const movements = input
  .slice(1, n + 1)
  .map((line) => line.split(" ").map(Number));

const bird = new Array(11).fill(-1);

let count = 0;
for (let [num, position] of movements) {
  if (bird[num] === -1) {
    bird[num] = position;
  } else if (bird[num] === 0) {
    if (position === 1) {
      count++;
      bird[num] = 1;
    }
  } else {
    if (position === 0) {
      count++;
      bird[num] = 0;
    }
  }
}

console.log(count);

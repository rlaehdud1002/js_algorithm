// 개발자의 능력 3

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input[0].trim().split(" ").map(Number);

const total = arr.reduce((prev, cur) => prev + cur);
let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    for (let k = j + 1; k < 6; k++) {
      const team1 = arr[i] + arr[j] + arr[k];
      const team2 = total - team1;

      minDiff = Math.min(minDiff, Math.abs(team1 - team2));
    }
  }
}

console.log(minDiff);

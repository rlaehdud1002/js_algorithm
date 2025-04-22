// 개발자의 능력 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);

const total = arr.reduce((prev, cur) => prev + cur);
let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    for (let k = 0; k < 6; k++) {
      for (let l = 0; l < 6; l++) {
        if (i === j || i === k || i === l || j === k || j === l || k === l)
          continue;

        const team1 = arr[i] + arr[j];
        const team2 = arr[k] + arr[l];
        const team3 = total - team1 - team2;

        minDiff = Math.min(
          minDiff,
          Math.max(team1, team2, team3) - Math.min(team1, team2, team3)
        );
      }
    }
  }
}

console.log(minDiff);

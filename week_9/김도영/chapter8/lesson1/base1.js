// 야바위

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1).map((line) => line.split(" ").map(Number));

let maxPoint = 0;
for (let i = 1; i <= 3; i++) {
  let point = 0;
  const rockPosition = new Array(4).fill(0);
  rockPosition[i] = 1;

  for (let [a, b, c] of commands) {
    [rockPosition[a], rockPosition[b]] = [rockPosition[b], rockPosition[a]];

    if (rockPosition[c]) {
      point++;
    }
  }

  maxPoint = Math.max(maxPoint, point);
}

console.log(maxPoint);

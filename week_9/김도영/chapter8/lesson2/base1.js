// 독서실의 거리두기 5

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const seat = input[1].split("");

let result = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  if (seat[i] === "1") continue;

  seat[i] = "1";

  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (seat[j] === "1" && seat[k] === "1") {
        minDistance = Math.min(minDistance, Math.abs(j - k));
      }
    }
  }

  result = Math.max(minDistance, result);

  seat[i] = "0";
}

console.log(result);

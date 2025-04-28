// 독서실의 거리두기 4

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const seat = input[1].split("");

let result = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (seat[i] === "1" || seat[j] === "1") continue;

    seat[i] = "1";
    seat[j] = "1";

    let minDistance = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < n; k++) {
      for (let l = k + 1; l < n; l++) {
        if (seat[k] === "1" && seat[l] === "1") {
          minDistance = Math.min(minDistance, Math.abs(k - l));
        }
      }
    }

    result = Math.max(minDistance, result);

    seat[i] = "0";
    seat[j] = "0";
  }
}

console.log(result);

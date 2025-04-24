// 정보에 따른 수 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [t, a, b] = input[0].split(" ").map(Number);
const snData = input.slice(1, 1 + t).map((line) => line.split(" "));

let special = 0;
for (let i = a; i <= b; i++) {
  let minS = Number.MAX_SAFE_INTEGER;
  let minN = Number.MAX_SAFE_INTEGER;

  for (let [alpha, position] of snData) {
    if (alpha === "S") {
      minS = Math.min(minS, Math.abs(position - i));
    } else {
      minN = Math.min(minN, Math.abs(position - i));
    }
  }

  if (minS <= minN) special++;
}

console.log(special);

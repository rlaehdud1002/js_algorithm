// 이상한 폭탄 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const nums = input.slice(1, n + 1).map(Number);

let maxBomb = -1;
for (let i = 0; i < n; i++) {
  let bomb = nums[i];

  for (let j = i + 1; j <= i + k; j++) {
    if (bomb === nums[j]) {
      maxBomb = Math.max(maxBomb, bomb);
      break;
    }
  }
}

console.log(maxBomb);

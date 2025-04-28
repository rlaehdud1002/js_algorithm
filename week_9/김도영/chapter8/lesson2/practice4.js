// 이상한 폭탄 3

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
  nums.push(Number(input[i]));
}

const MAX = 1000000;

const bombArr = new Array(MAX + 1).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = i - k; j <= i + k; j++) {
    if (i === j || j < 0 || j >= n) continue;

    if (nums[i] === nums[j]) {
      bombArr[nums[i]] += 1;
      break;
    }
  }
}

let maxBomb = 0;
let result = 0;
for (let i = 0; i <= MAX; i++) {
  if (maxBomb < bombArr[i]) {
    result = i;
    maxBomb = bombArr[i];
  }
}

console.log(result);

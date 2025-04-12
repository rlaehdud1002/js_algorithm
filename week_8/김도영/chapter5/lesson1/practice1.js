// 연속되는 수 3

const fs = require("fs");

const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

let maxCount = 1;
let count = 1;

for (let i = 1; i < n; i++) {
  // 두 수의 부호가 다를 때
  if (
    (arr[i][0] === "-" && arr[i - 1][0] !== "-") ||
    (arr[i][0] !== "-" && arr[i - 1][0] === "-")
  ) {
    count = 1;
  } else {
    // 둘 다 음수거나 둘 다 양수일 때
    count++;
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);

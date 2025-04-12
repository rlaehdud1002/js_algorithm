// 연속되는 수 2

const fs = require("fs");

const [n, ...arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxCount = 1;
let count = 1;

for (let i = 1; i < n; i++) {
  // 앞의 수와 같을 때
  if (arr[i] === arr[i - 1]) {
    count++;
  } else {
    // 앞의 수와 다를 때
    count = 1; // 카운트 초기화
  }

  maxCount = Math.max(maxCount, count); // 최대 갯수 찾아주기
}

console.log(maxCount);

// 원소 값들의 최대 합

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [0].concat(input[1].trim().split(" ").map(Number));

let result = Number.MIN_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
  let step = 0;
  let now = i;
  let sum = 0;
  while (step < m) {
    // 현재 위치 수를 sum에 더해주기
    sum += arr[now];
    // now를 현재 위치 수로 업데이트
    now = arr[now];
    step++;
  }

  result = Math.max(result, sum);
}

console.log(result);

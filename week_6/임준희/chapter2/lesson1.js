// 재귀함수를 이용한 별 출력 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

function printStar(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write("* ");
  }
  console.log();
}

function recur(n) {
  if (n === 0) return;

  printStar(n);
  recur(n - 1);
  printStar(n);
}

recur(n);

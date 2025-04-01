// 재귀함수를 이용한 별 출력

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function printStar(n) {
  if (n === 0) return;
  printStar(n - 1);
  console.log("*".repeat(n));
}

printStar(n);

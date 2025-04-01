// 값을 반환하지 않는 재귀함수

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function printStar(n) {
  if (n === 0) return;

  printStar(n - 1);
  console.log("*****");
}

printStar(n);

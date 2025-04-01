// 재귀함수를 이용한 별 출력 2

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function star(n) {
  if (n === 0) return;

  console.log("* ".repeat(n));
  star(n - 1);
  console.log("* ".repeat(n));
}

star(n);

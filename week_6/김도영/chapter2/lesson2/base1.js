// 1부터 특정 수까지의 합 2

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function sum(a) {
  if (a === 1) return 1;

  return a + sum(a - 1);
}

console.log(sum(n));

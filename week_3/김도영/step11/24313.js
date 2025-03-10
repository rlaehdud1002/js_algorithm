// 알고리즘 수업 - 점근적 표기 1

const fs = require("fs");

const [a, c, n] = fs.readFileSync(0).toString().trim().split("\n");

const [a1, a0] = a.split(" ").map(Number);

console.log(
  a1 * Number(n) + a0 <= Number(c) * Number(n) && Number(c) >= a1 ? 1 : 0
);

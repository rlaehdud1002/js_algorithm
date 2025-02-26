// 별 찍기 - 2

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= N; i++) {
  console.log(" ".repeat(N - i) + "*".repeat(i));
}

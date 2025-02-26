// 별 찍기 - 1

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= N; i++) {
  console.log("*".repeat(i));
}

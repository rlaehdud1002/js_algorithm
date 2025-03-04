// 별 찍기 - 7

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N; i++) {
  console.log(" ".repeat(N - i - 1) + "*".repeat(2 * i + 1));
}

for (let i = N - 2; i >= 0; i--) {
  console.log(" ".repeat(N - i - 1) + "*".repeat(2 * i + 1));
}

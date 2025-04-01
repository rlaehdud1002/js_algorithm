// 재귀함수의 꽃

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function print(n) {
  if (n === 0) return;

  process.stdout.write(n + " ");
  print(n - 1);
  process.stdout.write(n + " ");
}

print(n);

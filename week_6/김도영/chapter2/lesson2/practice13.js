// 이상한 수열

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function arr(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;

  return arr(Math.floor(num / 3)) + arr(num - 1);
}

console.log(arr(n));

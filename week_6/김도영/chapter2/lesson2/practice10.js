// 100으로 나눈 나머지의 수열

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

function square(num) {
  if (num === 1) return 2;
  if (num === 2) return 4;

  return (square(num - 1) * square(num - 2)) % 100;
}

console.log(square(N));

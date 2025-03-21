// 팩토리얼

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(N));

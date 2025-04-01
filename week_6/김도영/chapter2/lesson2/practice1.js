// Factorial

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(n));

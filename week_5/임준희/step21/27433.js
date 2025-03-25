const n = parseInt(require("fs").readFileSync(0).toString().trim());

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(n));

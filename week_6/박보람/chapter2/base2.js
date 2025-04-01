const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

function plus(n) {
  if (n === 0) return;
  plus(n - 1);
  process.stdout.write(n + " ");
}

function minus(n) {
  if (n === 0) return;
  process.stdout.write(n + " ");
  minus(n - 1);
}

plus(n);
process.stdout.write("\n");
minus(n);

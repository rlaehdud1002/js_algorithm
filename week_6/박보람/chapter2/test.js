const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

function printLine(n) {
  process.stdout.write("* ".repeat(n).trimEnd() + "\n");
}

function printStar(n) {
  if (n === 0) return;
  printLine(n);
  printStar(n - 1);
  printLine(n);
}

printStar(n);

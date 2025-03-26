const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = [];

function cantor(n) {
  if (n === 0) return "-";

  const prev = cantor(n - 1);

  const length = prev.length;

  const space = " ".repeat(length);

  return prev + space + prev;
}

for (const n of input) {
  res.push(cantor(n));
}

console.log(res.join("\n"));

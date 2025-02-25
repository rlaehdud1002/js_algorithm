const [a, b, c] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  console.log(max * 100);
}

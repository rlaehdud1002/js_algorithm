let [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const ab = a * b;

while (b) {
  const temp = a;
  a = b;
  b = temp % b;
}

console.log((ab / a).toString());

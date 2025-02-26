// A + B - 8

const fs = require("fs");

const [T, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < T; i++) {
  const [A, B] = arr[i].split(" ").map(Number);

  console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`);
}

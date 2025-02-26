const input = require("fs").readFileSync(0).toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}

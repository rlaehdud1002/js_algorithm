const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);

let result = "";

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += a + b + "\n";
}

console.log(result);

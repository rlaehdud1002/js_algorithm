let n = require("fs").readFileSync("input.txt").toString().trim();

Number(n);

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

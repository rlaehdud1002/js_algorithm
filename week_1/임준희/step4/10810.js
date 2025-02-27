const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  arr.fill(c, a - 1, b);
}

console.log(arr.join(" "));

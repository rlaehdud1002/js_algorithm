const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const temp = arr.slice(a - 1, b).reverse();
  arr.splice(a - 1, b - (a - 1), ...temp);
}

console.log(arr.join(" "));

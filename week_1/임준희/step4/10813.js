const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ");

const arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  a -= 1;
  b -= 1;

  [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(arr.join(" "));

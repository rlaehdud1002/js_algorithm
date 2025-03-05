const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

const [n, m] = input[0];
const arr1 = input.slice(1, n + 1);
const arr2 = input.slice(n + 1);

let res = "";

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < m; j++) {
    str += arr1[i][j] + arr2[i][j] + " ";
  }
  res += str + "\n";
}

console.log(res.trim());

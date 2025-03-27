const [n, m] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function dfs(num, arr) {
  if (num === m) {
    res.push(arr);
    return;
  }
  for (let i = 1; i < n + 1; i++) {
    dfs(num + 1, [...arr, i]);
  }
}

const res = [];

dfs(0, []);
console.log(res.map((arr) => arr.join(" ")).join("\n"));

const [n, m] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function dfs(num, s, arr) {
  if (num === m) {
    res.push(arr);
    return;
  }

  for (let i = s; i < n + 1; i++) {
    dfs(num + 1, i, [...arr, i]);
  }
}

const res = [];
dfs(0, 1, []);

console.log(res.map((arr) => arr.join(" ")).join("\n"));

const [n, m] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const res = [];

function dfs(num, arr) {
  if (num > n) {
    if (arr.length === m) {
      res.push(arr);
    }
    return;
  }

  dfs(num + 1, [...arr, num]);
  dfs(num + 1, arr);
}

dfs(1, []);

console.log(res.map((arr) => arr.join(" ")).join("\n"));

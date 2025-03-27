const [n, m] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const res = [];
const v = new Array(n + 1).fill(0);

function dfs(num, arr) {
  if (num === m) {
    res.push(arr);
    return;
  }

  for (let i = 1; i < n + 1; i++) {
    if (v[i] === 0) {
      v[i] = 1;
      dfs(num + 1, [...arr, i]);
      v[i] = 0;
    }
  }
}

dfs(0, []);

console.log(res.map((arr) => arr.join(" ")).join("\n"));

const [[n, m], ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? x.split(" ").map(Number) : x));

const s = new Set(arr.splice(0, n));

let cnt = 0;
for (let i = 0; i < m; i++) {
  if (s.has(arr[i])) {
    cnt++;
  }
}

console.log(cnt);

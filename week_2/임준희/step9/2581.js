let [m, n] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = [];

for (let i = m; i <= n; i++) {
  if (i === 2) {
    res.push(i);
    continue;
  }

  if (i < 2 || i % 2 === 0) continue;

  let satisfied = true;
  for (let j = 3; j * j <= i; j += 2) {
    if (i % j === 0) {
      satisfied = false;
      break;
    }
  }
  if (satisfied) res.push(i);
}

const sum = res.reduce((acc, cur) => acc + cur, 0);
console.log(sum ? sum + "\n" + res[0] : -1);

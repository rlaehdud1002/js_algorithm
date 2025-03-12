const [_, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? x : x.split(" ")));

const log = new Map(arr);
const res = [];

log.forEach((v, k) => {
  if (v === "enter") {
    res.push(k);
  }
});

res.sort().reverse();

console.log(res.join("\n"));

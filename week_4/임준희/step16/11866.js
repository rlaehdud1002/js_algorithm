const [n, k] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(i + 1);
}

const res = [];
let idx = 0;

while (arr.length > 0) {
  idx = (idx + k - 1) % arr.length;
  res.push(arr.splice(idx, 1)[0]);
}

console.log(`<${res.join(", ")}>`);

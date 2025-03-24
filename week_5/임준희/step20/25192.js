let [n, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");

n = parseInt(n);
const arr = [];
let cnt = -1;

for (let i = 0; i < n; i++) {
  if (input[i] === "ENTER") {
    cnt++;
    arr[cnt] = new Set();
  } else {
    arr[cnt].add(input[i]);
  }
}

const res = arr.reduce((acc, cur) => acc + cur.size, 0);

console.log(res);

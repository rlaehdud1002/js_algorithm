// 왔다 갔던 구역 2

const fs = require("fs");

const [n, ...commands] = fs.readFileSync(0).toString().trim().split("\n");

const block = new Array(2001).fill(0);
const segments = new Array();
let now = 0;

for (let command of commands) {
  let [size, d] = command.split(" ");
  size = Number(size);

  let left, right;
  if (d === "R") {
    left = now;
    right = now + size;
    now += size;
  } else {
    left = now - size;
    right = now;
    now -= size;
  }

  segments.push([left, right]);
}

for (let [a, b] of segments) {
  for (let i = a; i < b; i++) {
    block[i + 1000] += 1;
  }
}

let result = 0;
for (let count of block) {
  if (count >= 2) result++;
}
console.log(result);

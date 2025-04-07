const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const arr2 = [];
const res = [];
for (let i = 0; i < n; i++) {
  arr2.push(arr[i]);
  if (i % 2 === 0) {
    arr2.sort((a, b) => a - b);
    res.push(arr2[Math.floor(arr2.length / 2)]);
  }
}

console.log(res.join(" "));

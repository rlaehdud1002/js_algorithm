// 나머지

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let arr = new Set();

input.forEach((value) => {
  arr.add(value % 42);
});

console.log(arr.size);

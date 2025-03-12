// 좌표 압축

const fs = require("fs");

const [[N], coord] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const sortedCoord = [...new Set(coord)].sort((a, b) => a - b);

const numMap = new Map();
let index = 0;

for (let num of sortedCoord) {
  numMap.set(num, index);
  index++;
}

for (let i = 0; i < N; i++) {
  coord[i] = numMap.get(coord[i]);
}

console.log(coord.join(" "));

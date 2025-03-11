let [_, arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? x : x.split(" ").map(Number)));

const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

const compressedMap = new Map();
sortedArr.forEach((v, i) => compressedMap.set(v, i));
const res = arr.map((v) => compressedMap.get(v));
console.log(res.join(" "));

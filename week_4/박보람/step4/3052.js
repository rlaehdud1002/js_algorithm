let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr = [...arr].map((v) => v % 42);

Max = Math.max(...arr);
Min = Math.min(...arr);

bucket = new Array(Max + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  bucket[arr[i]]++;
}

console.log(bucket.filter((v) => v).length);

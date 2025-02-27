const arr = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxNum = 1,
  cnt = 0;

for (let i = 0; i < 9; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
    cnt = i + 1;
  }
}

console.log(maxNum + "\n" + cnt);

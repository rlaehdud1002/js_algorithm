const input = require("fs").readFileSync(0).toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);

let maxNum = arr[0],
  minNum = arr[0];

for (let i = 0; i < input[1].length; i++) {
  if (arr[i] > maxNum) maxNum = arr[i];
  if (arr[i] < minNum) minNum = arr[i];
}

console.log(minNum, maxNum);

// Carry 피하기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

function isCarry(a, b, c) {
  if ((a % 10) + (b % 10) + (c % 10) >= 10) return true;
  if ((a % 100) / 10 + (b % 100) / 10 + (c % 100) / 10 >= 10) return true;
  if ((a % 1000) / 100 + (b % 1000) / 100 + (c % 1000) / 100 >= 10) return true;
  if ((a % 10000) / 1000 + (b % 10000) / 1000 + (c % 10000) / 1000 >= 10)
    return true;

  return false;
}

let result = -1;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      if (!isCarry(arr[i], arr[j], arr[k])) {
        result = Math.max(result, arr[i] + arr[j] + arr[k]);
      }
    }
  }
}

console.log(result);

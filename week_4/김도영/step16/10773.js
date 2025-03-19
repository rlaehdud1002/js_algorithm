// 제로

const fs = require("fs");

const [K, ...inputArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let stack = [];
let count = 0;
let sum = 0;
for (let input of inputArr) {
  if (input === 0) {
    sum -= stack.pop(count - 1);
    count--;
    continue;
  }

  stack.push(input);
  sum += input;
  count++;
}

console.log(sum);

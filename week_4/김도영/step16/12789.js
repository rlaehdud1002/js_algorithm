// 도키도키 간식드리미

const fs = require("fs");

const [[N], studentInput] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

let stack = [];
let now = 1;
for (let num of studentInput) {
  if (num === now) {
    now++;

    while (stack && stack[stack.length - 1] === now) {
      stack.pop();
      now++;
    }
  } else {
    stack.push(num);
  }
}

console.log(stack.length ? "Sad" : "Nice");

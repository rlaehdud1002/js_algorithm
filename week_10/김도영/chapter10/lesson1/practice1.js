// 홀수 짝수의 묶음

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const blocks = input[1].trim().split(" ").map(Number);

let even = 0;
let odd = 0;

for (let block of blocks) {
  block % 2 === 0 ? even++ : odd++;
}

let now = "even";
let count = 0;
while (true) {
  // 현재가 짝수차례 일 때
  if (now === "even") {
    // 짝수 갯수가 있을 때
    if (even) {
      even--;
    } else if (odd >= 2) {
      odd -= 2;
    } else {
      // 더 이상 만들지 못할 때
      if (even !== 0 || odd !== 0) count--;
      break;
    }
  } else {
    if (odd) {
      odd--;
    } else {
      break;
    }
  }

  count++;
  now = now === "even" ? "odd" : "even";
}

console.log(count);

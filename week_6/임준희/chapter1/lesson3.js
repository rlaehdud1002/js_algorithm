// 두 정수에 대한 연산값 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

function modify(a, b) {
  if (a > b) {
    a *= 2;
    b += 10;
  } else {
    a += 10;
    b *= 2;
  }
  return [a, b];
}

[a, b] = modify(a, b);

console.log(a, b);

// 괄호 쌍 만들어주기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const A = input[0];

let result = 0;
let length = A.length;

for (let i = 0; i < length - 1; i++) {
  for (let j = i + 1; j < length - 1; j++) {
    if (A[i] === "(" && A[i + 1] === "(" && A[j] === ")" && A[j + 1] === ")")
      result++;
  }
}

console.log(result);

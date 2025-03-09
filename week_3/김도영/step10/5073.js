// 삼각형과 세 변

const fs = require("fs");

const inputArr = fs.readFileSync(0).toString().trim().split("\n");

for (let input of inputArr) {
  const [a, b, c] = input.split(" ").map(Number);

  // 마지막 입력
  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  const maxLen = Math.max(a, b, c);
  const sumLen = a + b + c - maxLen;

  // 삼각형의 조건을 만족하지 못할 때
  if (maxLen >= sumLen) {
    console.log("Invalid");
    continue;
  }

  const setCount = new Set([a, b, c]).size;

  if (setCount === 1) {
    console.log("Equilateral");
  } else if (setCount === 2) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}

// 배수와 약수

const fs = require("fs");

const inputArr = fs.readFileSync(0).toString().trim().split("\n");

for (let input of inputArr) {
  const [A, B] = input.split(" ").map(Number);

  if (A === 0 && B === 0) {
    break;
  }

  // A가 B의 약수
  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    // A가 B의 배수
    console.log("multiple");
  } else {
    console.log("neither");
  }
}

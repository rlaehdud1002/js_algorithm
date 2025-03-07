// 약수들의 합

const fs = require("fs");

const inputArr = fs.readFileSync(0).toString().trim().split("\n");

for (let input of inputArr) {
  const num = Number(input);

  if (num === -1) {
    break;
  }

  let sum = 0;
  let numArr = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
      numArr.push(i);
    }
  }

  if (num === sum) {
    console.log(`${num} = ${numArr.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}

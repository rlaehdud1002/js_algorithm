// 초기 수열 복원하기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const sums = input[1].split(" ").map(Number);

for (let i = 1; i <= n; i++) {
  const numbers = [i];

  for (let j = 0; j < n - 1; j++) {
    numbers.push(sums[j] - numbers[j]);
  }

  const checkArr = new Array(n).fill(0);
  let check = true;
  for (let k = 0; k < n; k++) {
    const num = numbers[k] - 1;
    if (num > n || checkArr[num]) {
      check = false;
      break;
    }

    checkArr[num] = 1;
  }

  if (check) {
    console.log(numbers.join(" "));
    break;
  }
}

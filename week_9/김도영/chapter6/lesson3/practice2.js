// 숫자 카운트

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

let result = 0;

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    for (let k = 1; k < 10; k++) {
      if (i === j || j === k || k === i) continue;

      let isAnswer = true;
      for (let info of arr) {
        const [num, cnt1, cnt2] = info;

        const x = Math.floor(num / 100); // 백의 자리
        const y = Math.floor(num / 10) % 10; // 십의 자리
        const z = num % 10; // 일의 자리

        let checkCount1 = 0;
        let checkCount2 = 0;

        if (i === x) checkCount1++;
        if (j === y) checkCount1++;
        if (k === z) checkCount1++;
        if (i === y || i === z) checkCount2++;
        if (j === x || j === z) checkCount2++;
        if (k === x || k === y) checkCount2++;

        if (checkCount1 !== cnt1 || checkCount2 !== cnt2) isAnswer = false;
      }

      if (isAnswer) result++;
    }
  }
}

console.log(result)

// 최대 H 점수

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

a.sort((a, b) => b - a);

for (let num = 100; num >= 0; num--) {
  let count = 0;
  let plusCount = l;

  for (let i = 0; i < n; i++) {
    if (a[i] >= num) {
      count++;
    } else {
      if (plusCount) {
        plusCount++;
        if (a[i] + 1 >= num) count++;
      }
    }
  }

  if (count >= num) {
    console.log(num);
    break;
  }
}

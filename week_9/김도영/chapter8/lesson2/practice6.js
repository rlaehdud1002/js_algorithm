// 구간 잘 나누기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = input[1].trim().split(" ").map(Number);

for (let score = 0; score <= 10000; score++) {
  let sum = 0;
  let possible = true;
  let section = 1;

  for (let num of a) {
    // num이 score보다 큰 경우
    if (num > score) {
      possible = false;
      break;
    }

    // sum + num이 score보다 큰 경우
    if (sum + num > score) {
      // 더 나눌 수 있을 경우
      if (section < m) {
        section++;
        sum = num;
        continue;
      } else {
        // 더 나눌 수 없는 경우
        possible = false;
        break;
      }
    } else {
      // sum + num이 score보다 작은 경우
      sum += num;
    }
  }

  if (possible) {
    console.log(score);
    break;
  }
}

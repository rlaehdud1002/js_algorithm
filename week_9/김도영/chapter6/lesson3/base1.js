// 한 가지로 열리는 자물쇠

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(" ").map(Number);

let result = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      if (Math.abs(a - i) <= 2 || Math.abs(b - j) <= 2 || Math.abs(c - k) <= 2)
        result++;
    }
  }
}

console.log(result);

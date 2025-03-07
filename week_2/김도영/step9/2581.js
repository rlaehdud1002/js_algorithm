// 소수

const fs = require("fs");

const [M, N] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const check = new Array(N + 1).fill(1).fill(0, 0, 2);

for (let i = 2; i < Math.sqrt(N); i++) {
  if (check[i]) {
    for (let j = i * i; j <= N; j += i) {
      check[j] = 0;
    }
  }
}

let sum = 0;
let min;

for (let i = M; i <= N; i++) {
  if (check[i]) {
    if (!min) {
      min = i;
    }

    sum += i;
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}

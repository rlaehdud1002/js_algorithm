// 공 넣기

const fs = require("fs");

const [line1, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = line1.split(" ").map(Number);

const basket = new Array(N).fill(0);

for (let i = 0; i < M; i++) {
  const [a, b, c] = arr[i].split(" ").map(Number);

  for (let j = a - 1; j < b; j++) {
    basket[j] = c;
  }
}

console.log(basket.join(" "));

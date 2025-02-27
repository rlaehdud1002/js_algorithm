// 공 바꾸기

const fs = require("fs");

const [line1, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = line1.split(" ").map(Number);

const basket = new Array(N);

for (let i = 0; i < N; i++) {
  basket[i] = i + 1;
}

for (let i = 0; i < M; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  const ball_a = basket[a - 1];
  const ball_b = basket[b - 1];

  basket[a - 1] = ball_b;
  basket[b - 1] = ball_a;
}

console.log(basket.join(" "));

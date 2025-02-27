// 바구니 뒤집기

const fs = require("fs");

const [line1, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = line1.split(" ").map(Number);

const basket = new Array(N).fill(0);
basket.forEach((_, index) => (basket[index] = index + 1));

for (let i = 0; i < M; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  const newBasket = new Array();

  for (let i = b; i > a - 1; i--) {
    newBasket.push(basket[i - 1]);
  }

  newBasket.forEach((value, index) => {
    basket[index + a - 1] = value;
  });
}

console.log(basket.join(" "));

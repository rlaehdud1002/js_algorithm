// 바구니 안의 사탕 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
  const [candy, position] = input[index++].split(" ").map(Number);
  baskets.push([candy, position]);
}

const candyArr = new Array(100).fill(0);

for (let basket of baskets) {
  const [candy, position] = basket;

  candyArr[position - 1] += candy;
}

let maxCandy = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < 100; i++) {
  let candy = 0;

  for (let j = 0; j < 2 * k + 1; j++) {
    if (i + j < 100) candy += candyArr[i + j];
  }

  maxCandy = Math.max(maxCandy, candy);
}

console.log(maxCandy);

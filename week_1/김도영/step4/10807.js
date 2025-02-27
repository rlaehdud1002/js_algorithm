// 개수 세기

const fs = require("fs");

const [N, arr, V] = fs.readFileSync(0).toString().trim().split("\n");

let total = 0;

const newArr = arr.split(" ");

for (let i = 0; i < N; i++) {
  if (newArr[i] === V) {
    total++;
  }
}

console.log(total);

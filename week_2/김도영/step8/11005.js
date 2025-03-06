// 진법 변환 2

const fs = require("fs");

let [N, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = 0;
let alphaDict = {};

for (let alpha of alphabet) {
  alphaDict[number] = alpha;
  number++;
}

let result = [];
while (N > 0) {
  const a = N % B;
  result.push(alphaDict[a]);
  N = Math.floor(N / B);
}

console.log(result.reverse().join(""));

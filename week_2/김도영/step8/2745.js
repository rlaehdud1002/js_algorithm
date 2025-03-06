// 진법 변환

const fs = require("fs");

const [N, B] = fs.readFileSync(0).toString().trim().split(" ");

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = 0;
let alphaDict = {};

for (let alpha of alphabet) {
  alphaDict[alpha] = number;
  number++;
}

const length = N.length;
let total = 0;
for (let i = 0; i < length; i++) {
  total += alphaDict[N[length - i - 1]] * B ** i;
}

console.log(total);

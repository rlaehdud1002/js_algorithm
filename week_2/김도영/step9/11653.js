// 소인수분해

const fs = require("fs");

let num = Number(fs.readFileSync(0).toString().trim());

for (let i = 2; i <= Math.sqrt(num); i++) {
  while (num % i === 0) {
    console.log(i);
    num = Math.floor(num / i);
  }
}

if (num > 1) {
  console.log(num);
}

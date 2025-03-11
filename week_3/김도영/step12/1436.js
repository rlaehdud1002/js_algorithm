// 영화감독 숌

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let count = 0;
let number = 666;

while (true) {
  if (number.toString().includes("666")) {
    count++;
  }

  if (count === N) {
    console.log(number);
    break;
  }

  number++;
}

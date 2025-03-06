// 세탁소 사장 동혁

const fs = require("fs");

const [T, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const centArr = [25, 10, 5, 1];

for (let money of arr) {
  let count = [];

  for (let cent of centArr) {
    const share = Math.floor(money / cent);

    count.push(share);
    money = money % cent;
  }

  console.log(count.join(" "));
}

// 데이터 센터의 온도 조정 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, c, g, h] = input[0].split(" ").map(Number);
const ta = [],
  tb = [];
for (let i = 1; i <= n; i++) {
  const [taValue, tbValue] = input[i].split(" ").map(Number);
  ta.push(taValue);
  tb.push(tbValue);
}

const tempArr = new Array(1001).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 1001; j++) {
    if (j < ta[i]) {
      tempArr[j] += c;
    } else if (ta[i] <= j && j <= tb[i]) {
      tempArr[j] += g;
    } else {
      tempArr[j] += h;
    }
  }
}

console.log(Math.max(...tempArr));

// 중앙 이동 알고리즘

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

function getNum(n) {
  if (n === 0) {
    return 2;
  }

  return getNum(n - 1) + 2 ** (n - 1);
}

console.log(getNum(N) ** 2)

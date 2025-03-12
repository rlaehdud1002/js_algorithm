const [n, a, m, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const arrN = a.split(" ");
const arrM = b.split(" ");
let res = "";

const setN = new Set(arrN);

for (let i = 0; i < m; i++) {
  res += (setN.has(arrM[i]) ? 1 : 0) + " ";
}

console.log(res);

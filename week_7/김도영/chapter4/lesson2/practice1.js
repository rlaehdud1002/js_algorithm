// 여러가지 진수변환

const fs = require("fs");

let [n, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const result = new Array();
while (n >= b) {
  result.push(n % b);
  n = Math.floor(n / b);
}

result.push(n);

console.log(result.reverse().join(""));

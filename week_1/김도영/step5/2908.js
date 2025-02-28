// 상수

const fs = require("fs");

const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

const reverseA = a[2] + a[1] + a[0];
const reverseB = b[2] + b[1] + b[0];

if (reverseA > reverseB) {
  console.log(reverseA)
} else {
  console.log(reverseB)
}

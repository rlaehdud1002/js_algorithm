const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const n = input[1];

const nums = [...n].map(Number);

let num = 0;

for (let i = 0; i < nums.length; i++) {
  num = num * a + nums[i];
}

const res = [];

while (true) {
  if (num < b) {
    res.push(num);
    break;
  }
  res.push(num % b);
  num = Math.floor(num / b);
}

console.log(res.reverse().join(""));

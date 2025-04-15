// 벌금은 누구에게

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const student = new Array(n + 1).fill(0);

let result = -1;
for (let num of penalizedPersons) {
  student[num] += 1;

  if (student[num] === k) {
    result = num;
    break;
  }
}

console.log(result);

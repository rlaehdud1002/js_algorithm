// DateTime to DateTime

const fs = require("fs");

const [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let minute1 = 11 * 24 * 60 + 11 * 60 + 11;
let minute2 = A * 24 * 60 + B * 60 + C;

if (minute1 <= minute2) {
  console.log(minute2 - minute1);
} else {
  console.log(-1);
}

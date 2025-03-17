const [[a, b], [c, d]] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let temp1 = a * d + b * c;
let temp2 = b * d;

let i = 2;
while (i < a || i < b) {
  if (temp1 % i === 0 && temp2 % i === 0) {
    temp1 = temp1 / i;
    temp2 = temp2 / i;
  } else {
    i++;
  }
}

console.log(temp1, temp2);

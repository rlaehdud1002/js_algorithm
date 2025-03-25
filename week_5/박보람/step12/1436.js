let input = require("fs").readFileSync("input.txt").toString().trim();

let cnt = 0;
let number = 0;

while (cnt < Number(input)) {
  number++;
  if (String(number).includes("666")) {
    cnt++;
  }
}

console.log(number);

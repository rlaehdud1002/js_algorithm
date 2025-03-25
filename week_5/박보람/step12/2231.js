let n = parseInt(require("fs").readFileSync("input.txt").toString().trim());

let m = n;
let result = [];

while (m >= 1) {
  let number = m.toString().split("").map(Number);
  let sum = number.reduce((acc, cur) => acc + cur, 0);

  if (sum + m === n) {
    result.push(m);
  }
  m--;
}

if (result.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...result));
}

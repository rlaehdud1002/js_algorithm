let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

n = input.shift();
max = Math.max(...input);
min = Math.min(...input);

let result = 0;

// 최대공약수 구하기
function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let gcdNum = 0;
for (let i = 1; i < input.length; i++) {
  gcdNum = gcd(gcdNum, input[i] - input[i - 1]);
}

for (let i = 1; i < input.length; i++) {
  let distance = input[i] - input[i - 1];
  result += distance / gcdNum - 1;
}

console.log(result);

let [n, k] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

result = [0];
let i = 1;

while (n >= i) {
  if (n % i == 0) {
    result.push(i);
  }
  i++;
}

if (result.length <= k) {
  console.log(0);
} else {
  console.log(result[k]);
}

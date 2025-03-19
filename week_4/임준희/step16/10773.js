const [k, ...input] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = [];
let res = 0;

for (let i = 0; i < k; i++) {
  if (input[i] === 0 && arr.length > 0) {
    res -= arr.pop();
  } else {
    arr.push(input[i]);
    res += input[i];
  }
}

console.log(res);

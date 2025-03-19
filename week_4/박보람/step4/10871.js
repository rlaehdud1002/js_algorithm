let input = require("fs").readFileSync("input.txt").toString().split("\n");

let [n, x] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = [];

for (let i = 0; i <= n; i++) {
  if (arr[i] < x) {
    result.push(arr[i]);
  }
}

console.log(result.join(" "));

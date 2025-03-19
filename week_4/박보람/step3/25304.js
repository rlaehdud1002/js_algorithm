let input = require("fs").readFileSync("input.txt").toString().split("\n");

let X = parseInt(input[0]);
let N = parseInt(input[1]);
let arr = Array();
let sum = 0;

for (let i = 2; i < N + 2; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  sum += arr[i][0] * arr[i][1];
}

if (sum === X) {
  console.log("Yes");
} else {
  console.log("No");
}

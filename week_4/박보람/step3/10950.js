let input = require("fs").readFileSync("input.txt").toString().split("\n");

let T = parseInt(input[0]);
let arr = [];

for (let i = 1; i <= T; i++) {
  arr.push(input[i].split(" "));
}

for (let i = 0; i < T; i++) {
  console.log(parseInt(arr[i][0]) + parseInt(arr[i][1]));
}

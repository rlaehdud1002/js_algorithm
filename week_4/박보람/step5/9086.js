let [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
arr = arr.map((el) => el.replace("\r", ""));

for (let i = 0; i < n; i++) {
  let result = "";
  result += arr[i][0];
  result += arr[i][arr[i].length - 1];
  console.log(result);
}

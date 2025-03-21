let [input, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

let [n, m] = input.split(" ").map(Number);
let result = Array(n)
  .fill()
  .map(() => Array(m).fill(0));
arr = arr.map((el) => el.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result[i][j] = arr[i][j] + arr[i + n][j];
  }
}

result.forEach((el) => {
  console.log(el.join(" "));
});

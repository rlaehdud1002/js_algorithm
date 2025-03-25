let [input, arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let [n, m] = input;
//m을 넘지 않으면서 m에 최대한 가까운 카드 3장의 합

let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[i] + arr[j] + arr[k] <= m && max < arr[i] + arr[j] + arr[k]) {
        max = arr[i] + arr[j] + arr[k];
      }
    }
  }
}

console.log(max);

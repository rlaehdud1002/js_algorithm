const [[n, m], arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let res = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum <= m && res < sum) {
        res = sum;
      }
    }
  }
}

console.log(res);

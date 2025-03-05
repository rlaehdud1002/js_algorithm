let [n, ...input] = require("fs").readFileSync(0).toString().trim().split("\n");

n = parseInt(n);
input = input.map((x) => x.split(" ").map(Number));

const arr = Array.from({ length: 100 }, () => Array(100).fill(0));

let cnt = 0;

for (let i = 0; i < n; i++) {
  const row = input[i][0];
  const col = input[i][1];
  for (let j = row; j < row + 10; j++) {
    for (let k = col; k < col + 10; k++) {
      if (arr[j][k] === 0) {
        arr[j][k]++;
        cnt++;
      }
    }
  }
}

console.log(cnt);

// 전부 겹치는 선분 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
let x1List = [],
  x2List = [];
for (let i = 1; i <= n; i++) {
  const [x1, x2] = input[i].split(" ").map(Number);
  x1List.push(x1);
  x2List.push(x2);
}

let result = "No";
for (let i = 0; i < n; i++) {
  const line = new Array(101).fill(0);

  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    for (let k = x1List[j]; k <= x2List[j]; k++) {
      line[k]++;

      if (line[k] === n - 1) {
        result = "Yes";
        break;
      }
    }
  }

  if (result === "Yes") break;
}

console.log(result);

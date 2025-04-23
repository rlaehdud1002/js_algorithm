// 운행 되고 있는 시간

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input
  .slice(1, n + 1)
  .map((line) => line.split(" ").map(Number));

let maxWork = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  let work = 0;
  let workArr = new Array(1000).fill(0);
  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    const [start, end] = segments[j];

    for (let k = start; k < end; k++) {
      if (!workArr[k]) {
        workArr[k] = 1;
        work++;
      }
    }
  }

  maxWork = Math.max(maxWork, work);
}

console.log(maxWork);

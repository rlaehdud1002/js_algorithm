const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
let cnt = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === 1) continue;
  let satisfied = true;

  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      satisfied = false;
    }
  }
  if (satisfied) cnt++;
}

console.log(cnt);

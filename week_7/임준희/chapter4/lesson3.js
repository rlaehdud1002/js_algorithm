const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1);

const MAX_RANGE = 100000;

const arr = Array(2 * MAX_RANGE + 1).fill(0);
let w = (b = 0);

let cur = MAX_RANGE;

for (let i = 0; i < n; i++) {
  let [x, direction] = commands[i].split(" ");
  x = Number(x);

  if (direction === "L") {
    while (x > 0) {
      arr[cur] = 1;
      x--;
      if (x) {
        cur--;
      }
    }
  }
  if (direction === "R") {
    while (x > 0) {
      arr[cur] = 2;
      x--;
      if (x) {
        cur++;
      }
    }
  }
}

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === 1) {
    w++;
  }
  if (arr[i] === 2) {
    b++;
  }
}

console.log(w, b);

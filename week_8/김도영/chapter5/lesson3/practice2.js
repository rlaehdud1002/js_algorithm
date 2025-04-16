// 되돌아오기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const commands = input[0];

// 북 동 남 서
const di = [0, 1, 0, -1];
const dj = [1, 0, -1, 0];

let d = 0;
const now = [0, 0];

let count = 0;
let result = -1;
for (let command of commands) {
  count++;
  switch (command) {
    case "F":
      now[0] += di[d];
      now[1] += dj[d];
      break;
    case "L":
      d = (d - 1 + 4) % 4;
      break;
    case "R":
      d = (d + 1) % 4;
      break;
  }

  if (now[0] === 0 && now[1] === 0) {
    result = count;
    break;
  }
}

console.log(result);

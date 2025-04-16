// 되돌아오기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const moves = input.slice(1);

const now = [0, 0];

// N E S W
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const dir = {
  N: 0,
  E: 1,
  S: 2,
  W: 3,
};

let count = 0;
let result = -1;
for (let move of moves) {
  const [direction, distance] = move.split(" ");

  for (let i = 1; i <= Number(distance); i++) {
    now[0] += dx[dir[direction]];
    now[1] += dy[dir[direction]];
    count++;

    if (now[0] === 0 && now[1] === 0) {
      result = count;
      break;
    }
  }

  if (result !== -1) break;
}

console.log(result);

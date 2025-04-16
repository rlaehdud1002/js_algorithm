// 방향에 맞춰 이동

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const moves = input.slice(1);

const now = [0, 0]; // x,y

for (let i = 0; i < n; i++) {
  const [direction, distance] = moves[i].split(" ");

  switch (direction) {
    case "W":
      now[0] -= Number(distance);
      break;
    case "S":
      now[1] -= Number(distance);
      break;
    case "N":
      now[1] += Number(distance);
      break;
    case "E":
      now[0] += Number(distance);
      break;
  }
}

console.log(now.join(" "));

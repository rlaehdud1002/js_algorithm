// 좌표 정렬하기 2

const fs = require("fs");

const [N, ...coord] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

coord.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

console.log(coord.map((value) => value.join(" ")).join("\n"));

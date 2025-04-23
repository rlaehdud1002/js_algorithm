// 삼각형 만들기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

let maxTriangle = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (
        (points[i][0] === points[j][0] ||
          points[j][0] === points[k][0] ||
          points[k][0] === points[i][0]) &&
        (points[i][1] === points[j][1] ||
          points[j][1] === points[k][1] ||
          points[k][1] === points[i][1])
      ) {
        const triangle = Math.abs(
          points[i][0] * points[j][1] +
            points[j][0] * points[k][1] +
            points[k][0] * points[i][1] -
            (points[j][0] * points[i][1] +
              points[k][0] * points[j][1] +
              points[i][0] * points[k][1])
        );

        maxTriangle = Math.max(maxTriangle, triangle);
      }
    }
  }
}

console.log(maxTriangle === Number.MIN_SAFE_INTEGER ? 0 : maxTriangle);

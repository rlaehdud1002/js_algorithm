const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);

const arrX = [];
const arrY = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arrX.push(x);
  arrY.push(y);
}

const minX = Math.min(...arrX);
const maxX = Math.max(...arrX);
const minY = Math.min(...arrY);
const maxY = Math.max(...arrY);

console.log((maxX - minX) * (maxY - minY));

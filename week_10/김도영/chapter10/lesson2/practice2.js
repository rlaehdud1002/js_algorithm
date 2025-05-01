// 두 점으로 만드는 정사각형

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [x1, y1, x2, y2] = input[0].split(" ").map(Number);
const [a1, b1, a2, b2] = input[1].split(" ").map(Number);

const c1 = Math.min(x1, a1, x2, a2);
const c2 = Math.min(y1, b1, y2, b2);
const c3 = Math.max(x1, a1, x2, a2);
const c4 = Math.max(y1, b1, y2, b2);

const width = Math.max(c3 - c1, c4 - c2);
console.log(width ** 2);

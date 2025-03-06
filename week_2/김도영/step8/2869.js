// 달팽이는 올라가고 싶다

const fs = require("fs");

const [A, B, V] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt;

if ((V - A) % (A - B) === 0) {
  cnt = Math.floor((V - A) / (A - B)) + 1;
} else {
  cnt = Math.floor((V - A) / (A - B)) + 2;
}

console.log(cnt);

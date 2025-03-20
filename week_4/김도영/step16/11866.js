// 요세푸스 문제 0

const fs = require("fs");

const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let circle = new Array(N);

for (let i = 0; i < N; i++) {
  circle[i] = i + 1;
}

let answer = [];
let now = 0;

while (circle.length > 0) {
  now = (now + K - 1) % circle.length;
  answer.push(circle.splice(now, 1)[0]);
}

console.log(`<${answer.join(", ")}>`);

// 빠른 A + B

const fs = require("fs");

const [T, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";

for (let i = 0; i < T; i++) {
  const [A, B] = arr[i].split(" ").map(Number);

  answer += A + B + "\n";
}

console.log(answer);

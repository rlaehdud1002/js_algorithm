// 듣보잡

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const noListen = new Set(input.slice(1, N + 1));
const noWatch = input.slice(N + 1);

const answer = [];

for (let name of noWatch) {
  if (noListen.has(name)) {
    answer.push(name);
  }
}

console.log(answer.length);
console.log(answer.sort().join("\n"));

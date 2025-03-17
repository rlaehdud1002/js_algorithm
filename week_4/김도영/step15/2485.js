// 가로수

const fs = require("fs");

const [N, ...lightInput] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function getGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
}

const light = new Array(N - 1);
for (let i = 0; i < N - 1; i++) {
  light[i] = lightInput[i + 1] - lightInput[i];
}

let distance = light[0];
for (let i = 1; i < N - 1; i++) {
  distance = getGcd(distance, light[i]);
}

let answer = 0;
for (let dis of light) {
  answer += dis / distance - 1;
}

console.log(answer);

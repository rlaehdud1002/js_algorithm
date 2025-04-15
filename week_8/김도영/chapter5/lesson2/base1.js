// 만나는 그 순간

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
  const [d, t] = input[line++].split(" ");
  movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
  const [d, t] = input[line++].split(" ");
  movesB.push([d, Number(t)]);
}

const locationA = new Array();
let nowA = 0;
let totalA = 0;
for (let i = 0; i < n; i++) {
  let [d, t] = movesA[i];
  totalA += t;

  while (t > 0) {
    locationA.push(d === "L" ? --nowA : ++nowA);
    t--;
  }
}

const locationB = new Array();
let nowB = 0;
let totalB = 0;
for (let i = 0; i < m; i++) {
  let [d, t] = movesB[i];
  totalB += t;

  while (t > 0) {
    locationB.push(d === "L" ? --nowB : ++nowB);
    t--;
  }
}

let result = -1;
const minTotal = Math.min(totalA, totalB);

for (let i = 0; i < minTotal; i++) {
  if (locationA[i] === locationB[i]) {
    result = i + 1;
    break;
  }
}

console.log(result);

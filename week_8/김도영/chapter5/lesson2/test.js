// 선두를 지켜라 3

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, m] = input[index++].split(" ").map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(" ").map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(" ").map(Number);
  B_moves.push([v, t]);
}

const locationA = new Array();
locationA.push(0);
let nowA = 0;
for (let [v, t] of A_moves) {
  while (t > 0) {
    nowA += v;

    locationA.push(nowA);
    t--;
  }
}

const locationB = new Array();
locationB.push(0);
let nowB = 0;
for (let [v, t] of B_moves) {
  while (t > 0) {
    nowB += v;

    locationB.push(nowB);
    t--;
  }
}

const time = locationA.length;
let winner;
let result = 0;
for (let i = 1; i < time; i++) {
  if (locationA[i] === locationB[i]) {
    if (winner !== "both") result++;

    winner = "both";
  }

  if (locationA[i] > locationB[i]) {
    if (winner !== "A") result++;

    winner = "A";
  }

  if (locationB[i] > locationA[i]) {
    if (winner !== "B") result++;

    winner = "B";
  }
}

console.log(result);

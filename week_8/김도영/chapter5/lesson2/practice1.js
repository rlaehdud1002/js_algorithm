// 선두를 지켜라

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const bData = input
  .slice(n + 1, n + 1 + m)
  .map((line) => line.split(" ").map(Number));

const locationA = new Array();
locationA.push(0);
let nowA = 0;
for (let [v, t] of aData) {
  while (t > 0) {
    nowA += v;

    locationA.push(nowA);
    t--;
  }
}

const locationB = new Array();
locationB.push(0);
let nowB = 0;
for (let [v, t] of bData) {
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
  if (locationA[i] > locationB[i]) {
    if (winner === "B") result++;

    winner = "A";
  }

  if (locationB[i] > locationA[i]) {
    if (winner === "A") result++;

    winner = "B";
  }
}

console.log(result);

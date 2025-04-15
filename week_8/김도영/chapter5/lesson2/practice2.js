// 좌우로 움직이는 로봇

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

const MAX = 1000000;

const locationA = new Array(MAX + 1).fill(0);
let timeA = 1;
for (let i = 0; i < n; i++) {
  let [t, d] = movesA[i].split(" ");
  t = Number(t);

  for (let j = 0; j < t; j++) {
    locationA[timeA] =
      d === "L" ? locationA[timeA - 1] - 1 : locationA[timeA - 1] + 1;
    timeA++;
  }
}

const lastA = locationA[timeA - 1];
for (let i = timeA; i < MAX + 1; i++) {
  locationA[i] = lastA;
}

const locationB = new Array(MAX + 1).fill(0);
let timeB = 1;
for (let i = 0; i < m; i++) {
  let [t, d] = movesB[i].split(" ");
  t = Number(t);

  for (let j = 0; j < t; j++) {
    locationB[timeB] =
      d === "L" ? locationB[timeB - 1] - 1 : locationB[timeB - 1] + 1;
    timeB++;
  }
}

const lastB = locationB[timeB - 1];
for (let i = timeB; i < MAX + 1; i++) {
  locationB[i] = lastB;
}

let result = 0;
for (let i = 1; i < MAX + 1; i++) {
  if (locationA[i - 1] !== locationB[i - 1] && locationA[i] === locationB[i]) {
    result++;
  }
}

console.log(result);

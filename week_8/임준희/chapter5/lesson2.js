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

const MAX_T = 1000000;
const arrA = Array(MAX_T + 1).fill(0);
const arrB = Array(MAX_T + 1).fill(0);

let timeA = 1;
for (let i = 0; i < n; i++) {
  const [v, t] = A_moves[i];
  for (j = 0; j < t; j++) {
    arrA[timeA] = arrA[timeA - 1] + v;
    timeA++;
  }
}

let timeB = 1;
for (let i = 0; i < m; i++) {
  const [v, t] = B_moves[i];
  for (j = 0; j < t; j++) {
    arrB[timeB] = arrB[timeB - 1] + v;
    timeB++;
  }
}

let res = 0;
let leader = 0;

for (let i = 1; i < timeA; i++) {
  if (arrA[i] > arrB[i]) {
    if (leader !== 1) {
      res++;
    }
    leader = 1;
  } else if (arrA[i] < arrB[i]) {
    if (leader !== 2) {
      res++;
    }
    leader = 2;
  } else {
    if (leader !== 3) {
      res++;
    }
    leader = 3;
  }
}

console.log(res);

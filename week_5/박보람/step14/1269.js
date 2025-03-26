let input = require("fs").readFileSync(0).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let A = new Set(input[1].split(" ").map(Number));
let B = new Set(input[2].split(" ").map(Number));

let answer = new Set([...A, ...B]);

A.forEach((a) => {
  if (B.has(a)) {
    answer.delete(a);
  }
});

console.log(answer.size);

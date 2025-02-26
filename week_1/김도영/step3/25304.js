// 영수증

const fs = require("fs");

const [X, N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

let total = 0;

for (let i = 0; i < N; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  total += a * b;
}

if (total === +X) {
  console.log("Yes");
} else {
  console.log("No");
}

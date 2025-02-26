// A + B - 3

const fs = require("fs");

const [T, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < T; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  console.log(a + b) 
}
